import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MultiSelect } from "react-multi-select-component";
import {
  Table,
  Pagination,
  InputGroup,
  FormControl,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
} from "react-bootstrap";
import useConditionalBootstrap from "./UseConditionalBootstrap";
import * as XLSX from "xlsx";
import "./DataTable.css";

const SearchData2 = () => {
  useConditionalBootstrap();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [option, setOption] = useState([{ value: "Name", label: "Name" }]);
  const [optionInObject, setOptionInObject] = useState({ Name: "" });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [columnsForExport, setColumnsForExport] = useState([
    { value: "Name", label: "Name" },
    { value: "PhoneNumber", label: "PhoneNumber" },
    { value: "Pincode", label: "Pincode" },
    { value: "StateName", label: "StateName" },
  ]);
  const [fromExportRecord, setFromExportRecord] = useState();
  const [toExportRecord, setToExportRecord] = useState();
  const [recordPerTable, setRecordPerTable] = useState(10);
  const [columns, setColumns] = useState([
    "Name",
    "PhoneNumber",
    "Pincode",
    "StateName",
    "DistrictName",
  ]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [excelData, setExcelData] = useState([]);
  const [tableRange, setTableRange] = useState("1-50");
  const [category, setCategory] = useState("Bombay");
  const [fullData, setFullData] = useState([]);
  const [fetchProgress, setFetchProgress] = useState(0);
const [showProgressBar, setShowProgressBar] = useState(false);
const [abortController, setAbortController] = useState(null);



  const isTableRangeDisabled = category !== "Laptop";

  // const fetchData = async () => {
  //   const hasValidFilter = Object.values(optionInObject).some(
  //     (val) => val && val.trim() !== ""
  //   );

  //   if (!hasValidFilter) {
  //     toast.error("Please fill at least one filter value to search.");
  //     return;
  //   }
  //   setLoading(true);
  //   try {
  //     const domain = localStorage.getItem("domain");
  //     const response = await axios.get(`${domain}/search-table`, {
  //       params: {
  //         recordPerTable,
  //         optionInObj: optionInObject,
  //         page: 1,
  //         tableRange,
  //         category,
  //       },
  //     });

  //     let allData = [];
  //     for (const table in response.data) {
  //       const tableData = response.data[table].map((record) => {
  //         const { Name, PhoneNumber, Pincode, StateName, DistrictName } = record;
  //         return {
  //           Name: Name || "",
  //           PhoneNumber: PhoneNumber || "",
  //           Pincode: Pincode !== undefined ? Pincode : null,
  //           StateName: StateName || "",
  //           DistrictName: DistrictName || "",
  //         };
  //       });
  //       allData = [...allData, ...tableData];
  //     }

  //     setFullData(allData);
  //     setTotalRecords(allData.length);
  //     setTotalPages(Math.ceil(allData.length / recordPerTable));

  //     // Set data for page 1
  //     paginateData(allData, 1, recordPerTable);
  //     setPage(1);
  //     setPageNumber(1);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchData = async () => {

    const controller = new AbortController();
setAbortController(controller);
setShowProgressBar(true);
setFetchProgress(0);

    const hasValidFilter = Object.values(optionInObject).some(
      (val) => val && val.trim() !== ""
    );

    if (!hasValidFilter) {
      toast.error("Please fill at least one filter value to search.");
      return;
    }

    // setLoading(true);
    setFullData([]);
    setData([]);
    setPage(1);
    setPageNumber(1);
    setTotalRecords(0);
    setTotalPages(1);

    try {

//       setShowProgressBar(true);
// setFetchProgress(0); // Reset progress

      const domain = localStorage.getItem("domain");

      let tables;

      if(category === 'Bombay'){
        tables = [
          'bc_01',
                'bc_02',
                'bc_03',
                'bc_04',
        ];
      }

      if(category === 'Store & Mall'){
        tables = [
          'bigshop_01',
                'bigshop_02',
                'bigshop_03',
                'bigshop_04',
                'bigshop_05',
        ];
      }

      if(category === 'College'){
        tables = [
          'college_01',
                'college_03',
                'college_04',
                'college_05',
        ];
      }

      if(category === 'Doctor'){
        tables = [
          'doctor_01',
                'doctor_02',
                'doctor_03',
                'doctor_04',
        ];
      }

      if (category == "Electricity") {
        tables = [
            'electricity_01',
            'electricity_02',
            'electricity_03',
            'electricity_04',
        ];
    }

      if(category === 'Petrol Pump'){
        tables = [
          'petrolpump_01',
                'petrolpump_02',
                'petrolpump_03',
                'petrolpump_04',
                'petrolpump_05',
        ];
      }

      if (category == "Restaurant") {
        tables = [
            'restaurant_01',
            'restaurant_02',
            'restaurant_03',
            'restaurant_04',
            'restaurant_05',
        ];
    }


    if (category == "School") {
        tables = [
            'school_01',
            'school_02',
            'school_03',
            'school_04',
            'school_05',
        ];
    }

    if (category == "Temple") {
        tables = [
            'temple_01',
            'temple_02',
            'temple_03',
            'temple_04',
        ];
    }

    if (category == "Wership") {
        tables = [
            'wership_01',
            'wership_02',
            'wership_03',
            'wership_04',
            'wership_05',
        ];
    }

    if (category == "Cinema") {
        tables = [
            'cinema_03',
        ];
    }

if(tableRange === '1-50' && category === 'Laptop'){
      tables = [
        "advbdata_ap_and_ts_01",
        "advbdata_ap_and_ts_02",
        "advbdata_ap_and_ts_03",
        "advbdata_ap_and_ts_04",
        "advbdata_ap_and_ts_05",
        "advbdata_ap_and_ts_06",
        "advbdata_ap_and_ts_07",
        "advbdata_ap_and_ts_08",
        "advbdata_ap_and_ts_09",
        "advbdata_ap_and_ts_10",
        "advbdata_ap_and_ts_11",
        "advbdata_ap_and_ts_12",
        "advbdata_ap_and_ts_13",
        "advbdata_ap_and_ts_14",
        "advbdata_ap_and_ts_15",
        "advbdata_ap_and_ts_16",
        "advbdata_ap_and_ts_17",
        "advbdata_ap_and_ts_18",
        "advbdata_ap_and_ts_19",
        "advbdata_ap_and_ts_20",
        "advbdata_ap_and_ts_21",
        "advbdata_ap_and_ts_22",
        "advbdata_ap_and_ts_23",
        "advbdata_ap_and_ts_24",
        "advbdata_ap_and_ts_25",
        "advbdata_ap_and_ts_27",
        "advbdata_ap_and_ts_28",
        "advbdata_ap_and_ts_29",
        "advbdata_ap_and_ts_30",
        "advbdata_ap_and_ts_31",
        "advbdata_ap_and_ts_32",
        "advbdata_ap_and_ts_33",
        "advbdata_ap_and_ts_34",
        "advbdata_ap_and_ts_35",
        "advbdata_ap_and_ts_36",
        "advbdata_ap_and_ts_37",
        "advbdata_ap_and_ts_38",
        "advbdata_ap_and_ts_39",
        "advbdata_ap_and_ts_40",
        "advbdata_ap_and_ts_41",
        "advbdata_ap_and_ts_42",
        "advbdata_ap_and_ts_43",
        "advbdata_ap_and_ts_44",
        "advbdata_ap_and_ts_45",
        "advbdata_ap_and_ts_46",
        "advbdata_ap_and_ts_47",
        "advbdata_ap_and_ts_48",
        "advbdata_ap_and_ts_49",
      ];
    }

    if (tableRange === "51-100" && category === 'Laptop') {
      tables = [
          'advbdata_ap_and_ts_52',
          'advbdata_ap_and_ts_53',
          'advbdata_ap_and_ts_54',
          'advbdata_ap_and_ts_55',
          'advbdata_ap_and_ts_56',
          'advbdata_ap_and_ts_57',
          'advbdata_ap_and_ts_58',
          'advbdata_ap_and_ts_59',
          'advbdata_ap_and_ts_60',
          'advbdata_ap_and_ts_61',
          'advbdata_ap_and_ts_62',
          'advbdata_ap_and_ts_63',
          'advbdata_ap_and_ts_64',
          'advbdata_ap_and_ts_65',
          'advbdata_ap_and_ts_66',
          'advbdata_ap_and_ts_67',
          'advbdata_ap_and_ts_68',
          'advbdata_ap_and_ts_69',
          'advbdata_ap_and_ts_70',
          'advbdata_ap_and_ts_71',
          'advbdata_ap_and_ts_72',
          'advbdata_ap_and_ts_73',
          'advbdata_ap_and_ts_74',
          'advbdata_ap_and_ts_75',
          'advbdata_ap_and_ts_76',
          'advbdata_ap_and_ts_77',
          'advbdata_ap_and_ts_78',
          'advbdata_ap_and_ts_79',
          'advbdata_ap_and_ts_50',
          'advbdata_ap_and_ts_51',
          'advbdata_KN_01',
          'advbdata_KN_02',
          'advbdata_KN_03',
          'advbdata_KN_04',
          'advbdata_KN_05',
          'advbdata_KN_06',
          'advbdata_KN_07',
          'advbdata_KN_08',
          'advbdata_KN_09',
          'advbdata_KN_10',
          'advbdata_KN_11',
          'advbdata_KN_12',
          'advbdata_KN_13',
          'advbdata_KN_14',
          'advbdata_KN_15',
          'advbdata_KN_16',
          'advbdata_KN_17',
          'advbdata_KN_18',

      ];

  }


  if (tableRange == "101-150" && category === 'Laptop') {
    tables = [
        'advbdata_KN_19',
        'advbdata_KN_20',
        'advbdata_KN_21',
        'advbdata_KN_22',
        'advbdata_KN_23',
        'advbdata_KN_24',
        'advbdata_KN_25',
        'advbdata_KN_26',
        'advbdata_KN_27',
        'advbdata_KN_28',
        'advbdata_KN_29',
        'advbdata_KN_30',
        'advbdata_KN_31',
        'advbdata_KN_32',
        'advbdata_KN_33',
        'advbdata_KN_34',
        'advbdata_KN_35',
        'advbdata_KN_36',
        'advbdata_KN_37',
        'advbdata_KN_38',
        'advbdata_KN_39',
        'advbdata_KN_40',
        'advbdata_KN_41',
        'advbdata_KN_42',
        'advbdata_KN_43',
        'advbdata_KN_44',
        'advbdata_KN_45',
        'advbdata_KN_46',
        'advbdata_KN_47',
        'advbdata_KN_48',
        'advbdata_KN_49',
        'advbdata_KN_50',
        'advbdata_KN_51',
        'advbdata_KN_52',
        'advbdata_KN_53',
        'advbdata_KN_54',
        'advbdata_KN_55',
        'advbdata_KN_56',
        'advbdata_KN_57',
        'advbdata_KN_58',
        'advbdata_KN_59',
        'advbdata_KN_60',
        'advbdata_KN_61',
        'advbdata_KN_62',
        'advbdata_KN_63',
        'advbdata_KN_64',
        'advbdata_KN_65',
        'advbdata_KN_66',

    ];
}

if (tableRange == "151-200" && category === 'Laptop') {
  tables = [
      'advbdata_GJ_01',
      'advbdata_GJ_02',
      'advbdata_GJ_03',
      'advbdata_GJ_04',
      'advbdata_GJ_05',
      'advbdata_GJ_06',
      'advbdata_GJ_07',
      'advbdata_GJ_08',
      'advbdata_GJ_09',
      'advbdata_GJ_10',
      'advbdata_GJ_11',
      'advbdata_GJ_12',
      'advbdata_GJ_13',
      'advbdata_GJ_14',
      'advbdata_GJ_15',
      'advbdata_GJ_16',
      'advbdata_GJ_17',
      'advbdata_GJ_18',
      'advbdata_GJ_19',
      'advbdata_GJ_20',
      'advbdata_GJ_21',
      'advbdata_GJ_22',
      'advbdata_GJ_23',
      'advbdata_GJ_24',
      'advbdata_GJ_25',
      'advbdata_GJ_26',
      'advbdata_GJ_27',
      'advbdata_GJ_28',
      'advbdata_GJ_29',
      'advbdata_GJ_30',
      'advbdata_GJ_31',
      'advbdata_GJ_32',
      'advbdata_GJ_33',
      'advbdata_GJ_34',
      'advbdata_GJ_35',
      'advbdata_GJ_36',
      'advbdata_GJ_37',
      'advbdata_GJ_38',
      'advbdata_GJ_39',
      'advbdata_GJ_40',
      'advbdata_GJ_41',
      'advbdata_GJ_42',
      'advbdata_GJ_43',
      'advbdata_GJ_44',
      'advbdata_GJ_45',
      'advbdata_GJ_46',
      'advbdata_GJ_47',
      'advbdata_GJ_48',

  ];
}


if (tableRange == "201-250" && category === 'Laptop') {
  tables = [
      'advbdata_GJ_49',
      'advbdata_GJ_50',
      'advbdata_GJ_51',
      'advbdata_GJ_52',
      'advbdata_GJ_53',
      'advbdata_GJ_54',
      'advbdata_GJ_55',
      'advbdata_GJ_56',
      'advbdata_GJ_57',
      'advbdata_GJ_58',
      'advbdata_GJ_59',
      'advbdata_GJ_60',
      'advbdata_GJ_61',
      'advbdata_GJ_62',
      'advbdata_GJ_63',
      'advbdata_GJ_64',
      'advbdata_GJ_65',
      'advbdata_GJ_66',
      'advbdata_GJ_67',
      'advbdata_GJ_68',
      'advbdata_GJ_69',
      'advbdata_GJ_70',
      'advbdata_GJ_71',
      'advbdata_GJ_72',
      'advbdata_GJ_73',
      // 'advbdata_GJ_74',
      'advbdata_GJ_75',
      'advbdata_GJ_76',
      'advbdata_GJ_77',
      'advbdata_GJ_78',
      'advbdata_GJ_79',
      'advbdata_MH_01',
      'advbdata_MH_02',
      'advbdata_MH_03',
      'advbdata_MH_04',
      'advbdata_MH_05',
      'advbdata_MH_06',
      'advbdata_MH_07',
      'advbdata_MH_08',
      'advbdata_MH_09',
      'advbdata_MH_10',
      'advbdata_MH_11',
      'advbdata_MH_12',
      'advbdata_MH_13',
      'advbdata_MH_14',
      'advbdata_MH_15',
      'advbdata_MH_16',
      'advbdata_MH_18',

  ];
}


if (tableRange == "251-300" && category === 'Laptop') {
  tables = [
      'advbdata_MH_19',
      'advbdata_MH_20',
      'advbdata_MH_21',
      'advbdata_MH_22',
      'advbdata_MH_23',
      'advbdata_MH_24',
      'advbdata_MH_25',
      'advbdata_MH_26',
      'advbdata_MH_27',
      'advbdata_MH_28',
      'advbdata_MH_29',
      'advbdata_MH_30',
      'advbdata_MH_31',
      'advbdata_MH_32',
      'advbdata_MH_33',
      'advbdata_MH_34',
      'advbdata_MH_35',
      'advbdata_MH_36',
      'advbdata_MH_37',
      'advbdata_MH_38',
      'advbdata_MH_39',
      'advbdata_MH_40',
      'advbdata_MH_41',
      'advbdata_MH_42',
      'advbdata_MH_43',
      'advbdata_MH_44',
      'advbdata_MH_45',
      'advbdata_MH_46',
      'advbdata_MH_47',
      'advbdata_MH_48',
      'advbdata_MH_49',
      'advbdata_MH_50',
      'advbdata_MH_51',
      'advbdata_MH_52',
      'advbdata_MH_53',
      'advbdata_MH_54',
      'advbdata_MH_55',
      'advbdata_MH_56',
      'advbdata_MH_57',
      'advbdata_MH_58',
      'advbdata_MH_59',
      'advbdata_MH_60',
      'advbdata_MH_61',
      'advbdata_MH_62',
      'advbdata_MH_63',
      'advbdata_MH_64',
      'advbdata_MH_65',
      'advbdata_MH_66',

  ];
}


if (tableRange == "301-350" && category === 'Laptop') {
  tables = [
      'advbdata_MH_67',
      'advbdata_MH_68',
      'advbdata_MH_69',
      'advbdata_MH_70',
      'advbdata_MH_71',
      'advbdata_MH_72',
      'advbdata_MH_73',
      'advbdata_MH_74',
      'advbdata_MH_75',
      'advbdata_MH_76',
      'advbdata_MH_77',
      'advbdata_MH_78',
      'advbdata_MH_79',
      'advbdata_MH_80',
      'advbdata_MH_81',
      'advbdata_MH_82',
      'advbdata_MH_83',
      'advbdata_MH_84',
      'advbdata_MH_85',
      'advbdata_MH_86',
      'advbdata_MH_87',
      'advbdata_MH_88',
      'advbdata_MH_89',
      'advbdata_MH_90',
      'advbdata_MH_91',
      'advbdata_MH_92',
      'advbdata_MH_93',
      'advbdata_MH_94',
      'advbdata_MH_95',
      'advbdata_MH_96',
      'advbdata_MH_97',
      'advbdata_MH_98',
      'advbdata_MH_99',
      'advbdata_MH_100',
      'advbdata_MH_101',
      'advbdata_MH_102',
      'advbdata_MH_103',
      'advbdata_MH_104',
      'advbdata_MH_105',
      'advbdata_MH_106',
      'advbdata_MH_107',
      'advbdata_MH_108',
      'advbdata_MH_109',
      'advbdata_MH_110',
      'advbdata_MH_111',
      'advbdata_MH_112',
      'advbdata_MH_113',
      'advbdata_MH_114',

  ];
}

if (tableRange == "351-400" && category === 'Laptop') {
  tables = [
      'advbdata_MH_115',
      'advbdata_MH_116',
      'advbdata_MH_117',
      'advbdata_MH_118',
      'advbdata_MH_119',
      'advbdata_MH_120',
      'advbdata_MH_121',
      'advbdata_MH_122',
      'advbdata_MH_123',
      'advbdata_MH_124',
      'advbdata_MH_125',
      'advbdata_MH_126',
      'advbdata_MH_127',
      'advbdata_MH_128',
      'advbdata_MH_129',
      'advbdata_MH_130',
      'advbdata_MH_131',
      'advbdata_MH_132',
      'advbdata_MH_133',
      'advbdata_MH_134',
      'advbdata_MH_135',
      'advbdata_MH_136',
      'advbdata_MH_137',
      'advbdata_MH_138',
      'advbdata_MH_139',
      'advbdata_MH_140',
      'advbdata_MH_141',
      'advbdata_MH_142',
      'advbdata_MH_143',
      'advbdata_MH_144',
      'advbdata_MH_145',
      'advbdata_MH_146',
      'advbdata_MH_147',
      'advbdata_MH_148',
      'advbdata_MH_149',
      'advbdata_MH_150',
      'advbdata_MH_151',
      'advbdata_MH_152',
      'advbdata_MH_153',
      'advbdata_MH_154',
      'advbdata_MH_155',
      'advbdata_MH_156',
      'advbdata_MH_157',
      'advbdata_MH_158',
      'advbdata_MH_159',
      'advbdata_MH_160',
      'advbdata_MH_161',
      'advbdata_MH_162',

  ];
}


if (tableRange == "401-450" && category === 'Laptop') {
  tables = [
      'advbdata_MH_163',
      'advbdata_MH_164',
      'advbdata_MH_165',
      'advbdata_MH_166',
      'advbdata_MH_167',
      'advbdata_MH_168',
      'advbdata_MH_169',
      'advbdata_MH_170',
      'advbdata_MH_171',
      'advbdata_MH_172',
      'advbdata_MH_173',
      'advbdata_MH_174',
      'advbdata_MH_175',
      'advbdata_MH_176',
      'advbdata_MH_177',
      'advbdata_MH_178',
      'advbdata_MH_179',
      'advbdata_MH_180',
      'advbdata_MH_181',
      'advbdata_MH_182',
      'advbdata_MH_183',
      'advbdata_MH_184',
      'advbdata_MH_185',
      'advbdata_MH_186',
      'advbdata_MH_187',
      'advbdata_MH_188',
      'advbdata_MH_189',
      'advbdata_MH_190',
      'advbdata_MH_191',
      'advbdata_MH_192',
      'advbdata_MH_193',
      'advbdata_MH_194',
      'advbdata_MH_195',
      'advbdata_MH_196',
      'advbdata_MH_197',
      'advbdata_MH_198',
      'advbdata_MH_199',
      'advbdata_MH_200',
      'advbdata_MH_201',
      'advbdata_MH_202',
      'advbdata_MH_203',
      'advbdata_MH_204',
      'advbdata_MH_205',
      'advbdata_MH_206',
      'advbdata_MH_207',
      'advbdata_MH_208',
      'advbdata_MH_209',
      'advbdata_MH_210',
      'advbdata_MH_211',

  ];
}


if (tableRange == "451-500" && category === 'Laptop') {
  tables = [

      'advbdata_MH_212',
      'advbdata_MH_213',
      'advbdata_MH_214',
      'advbdata_MH_215',
      'advbdata_MH_216',
      'advbdata_MH_217',
      'advbdata_MH_218',
      'advbdata_MH_219',
      'advbdata_MH_220',
      'advbdata_MH_221',
      'advbdata_MH_222',
      'advbdata_MH_223',
      'advbdata_MH_224',
      'advbdata_MH_225',
      'advbdata_MH_226',
      'advbdata_MH_227',
      'advbdata_MH_228',
      'advbdata_MH_229',
      'advbdata_MH_230',
      'advbdata_MH_231',
      'advbdata_MH_232',
      'advbdata_MH_233',
      'advbdata_MH_234',
      'advbdata_MH_235',
      'advbdata_MH_236',
      'advbdata_MH_237',
      'advbdata_MH_238',
      'advbdata_MH_239',
      'advbdata_MH_240',
      'advbdata_MH_241',
      'advbdata_MH_242',
      'advbdata_MH_243',
      'advbdata_MH_244',
      'advbdata_MH_245',
      'advbdata_MH_246',
      'advbdata_MH_247',
      'advbdata_MH_248',
      'advbdata_MH_249',
      'advbdata_MH_250',
      'advbdata_MH_251',
      'advbdata_MH_252',
      'advbdata_MH_253',
      'advbdata_MH_254',
      'advbdata_MH_255',
      'advbdata_MH_256',
      'advbdata_MH_257',
      'advbdata_MH_258',
      'advbdata_MUMBAI_01',
      'advbdata_MUMBAI_02',

  ];
}


if (tableRange == "501-550" && category === 'Laptop') {
  tables = [

      'advbdata_MUMBAI_03',
      'advbdata_MUMBAI_04',
      'advbdata_MUMBAI_05',
      'advbdata_MUMBAI_06',
      'advbdata_MUMBAI_07',
      'advbdata_MUMBAI_08',
      'advbdata_MUMBAI_09',
      'advbdata_MUMBAI_10',
      'advbdata_MUMBAI_11',
      'advbdata_MUMBAI_12',
      'advbdata_MUMBAI_13',
      'advbdata_MUMBAI_14',
      'advbdata_MUMBAI_15',
      'advbdata_MUMBAI_16',
      'advbdata_MUMBAI_17',
      'advbdata_MUMBAI_18',
      'advbdata_MUMBAI_19',
      'advbdata_MUMBAI_20',
      'advbdata_MUMBAI_21',
      'advbdata_MUMBAI_22',
      'advbdata_MUMBAI_23',
      'advbdata_MUMBAI_24',
      'advbdata_MUMBAI_25',
      'advbdata_MUMBAI_26',
      'advbdata_MUMBAI_27',
      'advbdata_MUMBAI_28',
      'advbdata_MUMBAI_29',
      'advbdata_MUMBAI_30',
      'advbdata_MUMBAI_31',
      'advbdata_MUMBAI_32',
      'advbdata_MUMBAI_33',
      'advbdata_MUMBAI_34',
      'advbdata_MUMBAI_35',
      'advbdata_MUMBAI_36',
      'advbdata_MUMBAI_37',
      'advbdata_MUMBAI_38',
      'advbdata_MUMBAI_39',
      'advbdata_MUMBAI_40',
      'advbdata_MUMBAI_41',
      'advbdata_MUMBAI_42',
      'advbdata_MUMBAI_43',
      'advbdata_MUMBAI_44',
      'advbdata_MUMBAI_45',
      'advbdata_MUMBAI_46',
      'advbdata_MUMBAI_47',
      'advbdata_MUMBAI_48',
      'advbdata_MUMBAI_49',
      'advbdata_MUMBAI_50',
      'advbdata_MUMBAI_51',
      'advbdata_MUMBAI_52',

  ];
}


if (tableRange == "551-600" && category === 'Laptop') {
  tables = [


      'advbdata_MUMBAI_53',
      'advbdata_MUMBAI_54',
      'advbdata_MUMBAI_55',
      'advbdata_MUMBAI_56',
      'advbdata_MUMBAI_57',
      'advbdata_MUMBAI_58',
      'advbdata_MUMBAI_59',
      'advbdata_MUMBAI_60',
      'advbdata_MUMBAI_61',
      'advbdata_MUMBAI_62',
      'advbdata_MUMBAI_63',
      'advbdata_MUMBAI_64',
      'advbdata_MUMBAI_65',
      'advbdata_MUMBAI_66',
      'advbdata_MUMBAI_67',
      'advbdata_MUMBAI_68',
      'advbdata_MUMBAI_69',
      'advbdata_MUMBAI_70',
      'advbdata_MUMBAI_71',
      'advbdata_MUMBAI_72',
      'advbdata_MUMBAI_73',
      'advbdata_MUMBAI_74',
      'advbdata_MUMBAI_75',
      'advbdata_MUMBAI_76',
      'advbdata_MUMBAI_77',
      'advbdata_MUMBAI_78',
      'advbdata_MUMBAI_80',
      'advbdata_MUMBAI_81',
      'advbdata_MUMBAI_82',
      'advbdata_MUMBAI_83',
      'advbdata_MUMBAI_84',
      'advbdata_MUMBAI_85',
      'advbdata_MUMBAI_86',
      'advbdata_MUMBAI_87',
      'advbdata_MUMBAI_88',
      'advbdata_MUMBAI_89',
      'advbdata_MUMBAI_90',
      'advbdata_MUMBAI_91',
      'advbdata_MUMBAI_92',
      'advbdata_MUMBAI_93',
      'advbdata_MUMBAI_94',
      'advbdata_MUMBAI_95',
      'advbdata_MUMBAI_96',
      'advbdata_MUMBAI_97',
      'advbdata_MUMBAI_98',
      'advbdata_MUMBAI_99',
      'advbdata_MUMBAI_100',
      'advbdata_MUMBAI_101',
      'advbdata_MUMBAI_102'
  ];
}


      let accumulatedData = [];

      for (let i = 0; i < tables.length; i++) {
        const currentTable = tables[i];

        const percent = Math.round(((i + 1) / tables.length) * 100);
setFetchProgress(percent);


        // Optional: show table progress in console
        console.log(
          `Fetching table: ${currentTable} (${i + 1}/${tables.length})`
        );

        const response = await axios.get(`${domain}/search-table`, {
          params: {
            tableName: currentTable,
            recordPerTable,
            optionInObj: optionInObject,
            category,
          },
          signal: controller.signal,
        });
        console.log("response: ", response);

        // const tableData = response.data.map((record) => {
        //   const { Name, PhoneNumber, Pincode, StateName, DistrictName } =
        //     record;
        //   return {
        //     Name: Name || "",
        //     PhoneNumber: PhoneNumber || "",
        //     Pincode: Pincode !== undefined ? Pincode : null,
        //     StateName: StateName || "",
        //     DistrictName: DistrictName || "",
        //   };
        // });

        const tableData = response.data;

        accumulatedData = [...accumulatedData, ...tableData];

        setFullData((prev) => {
          const updated = [...prev, ...tableData];
          setTotalRecords(updated.length);
          setTotalPages(Math.ceil(updated.length / recordPerTable));

          // Only update paginated view if we're on first page
          if (page === 1) {
            paginateData(updated, 1, recordPerTable);
          }

          return updated;
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
      // setShowProgressBar(false);
      setAbortController(null);
setShowProgressBar(false);


    }
  };

  const paginateData = (dataArray, currentPage, perPage) => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const sliced = dataArray.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      id: startIndex + index + 1,
    }));
    setData(sliced);
  };

  const renderPagination = () => {
    const pages = [];
    const maxPagesToShow = 5;
    const half = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(1, page - half);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Prev
    if (page > 1) {
      pages.push(
        <Pagination.Prev
          key="prev"
          onClick={() => {
            const newPage = page - 1;
            setPage(newPage);
            setPageNumber(newPage);
            paginateData(fullData, newPage, Number(recordPerTable));
          }}
        />
      );
    }

    // Page numbers
    for (let num = startPage; num <= endPage; num++) {
      pages.push(
        <Pagination.Item
          key={num}
          active={num === page}
          onClick={() => {
            setPage(num);
            setPageNumber(num);
            paginateData(fullData, num, Number(recordPerTable));
          }}
        >
          {num}
        </Pagination.Item>
      );
    }

    // Next
    if (page < totalPages) {
      pages.push(
        <Pagination.Next
          key="next"
          onClick={() => {
            const newPage = page + 1;
            setPage(newPage);
            setPageNumber(newPage);
            paginateData(fullData, newPage, Number(recordPerTable));
          }}
        />
      );
    }

    return pages;
  };

  const exportData = () => {
    console.log(data);
    console.log(fullData);
    data.map((item) => console.log(item.id));
    let exportLimitedData;
    if (columnsForExport.length !== 0) {
      
      // if (fromExportRecord !== "" && toExportRecord !== "") {
      //   console.log('working');
      //   exportLimitedData = data.filter(
      //     (item) => item.id >= fromExportRecord && item.id <= toExportRecord
      //   );
      // } else {
        exportLimitedData = data;
        console.log('exportLimitedData: ',exportLimitedData);
      // }

      const exportData = exportLimitedData.map((record) => {
        const filteredRecord = {};
        columnsForExport.forEach((col) => {
          const column = col.value;
          filteredRecord[column] =
            record[column] !== undefined ? record[column] : null;
        });
        return filteredRecord;
      });

      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
      XLSX.writeFile(workbook, "export.xlsx");
    } else {
      alert("please Select Column to Export");
    }
  };

  const onSelectChange = (selectedOptions) => {
    setOption(selectedOptions);

    const newFilterValues = {};
    selectedOptions.forEach((item) => {
      newFilterValues[item.value] = "";
    });
    setOptionInObject(newFilterValues);
  };

  const handleInputChange = (e, field) => {
    const newValue = e.target.value;
    setOptionInObject((prevValues) => ({
      ...prevValues,
      [field]: newValue,
    }));
  };

  const clearFilter = () => {
    setData([]);
    setPage(1);
    setFilter("");
    setOption([{ value: "Name", label: "Name" }]);
    setCategory("Bombay");
    setTableRange("1-50");
    setPageNumber(1);
    setFromExportRecord("");
    setToExportRecord("");
    setRecordPerTable(10);
    setColumnsForExport([
      { value: "Name", label: "Name" },
      { value: "PhoneNumber", label: "PhoneNumber" },
      { value: "Pincode", label: "Pincode" },
      { value: "StateName", label: "StateName" },
    ]);
  };

  // const fetchDataInChunks = async () => {
  //   const domain = localStorage.getItem('domain')
  //   let currentPage = 1;
  //   let allData = [];
  //   let shouldContinue = true;
  
  //   setShowProgressBar(true);
  //   setFetchProgress(0);
  //   setFullData([]);
  //   setData([]);
  
  //   while (shouldContinue) {
  //     try {
  //       const response = await axios.get(`${domain}/search-table`, {
  //         params: {
  //           tableName: 'advbdata_ap_and_ts_02',
  //           recordPerTable: 10000,
  //           page: currentPage,
  //           optionInObj: optionInObject,
  //           category,
  //         },
  //       });

  //       console.log(response)
  
  //       const results = response.data.data || response.data;
  //       const total = response.data.total || 0;
  //       const perPage = response.data.per_page || 100;
  
  //       allData = [...allData, ...results];
  
  //       const percent = Math.min(
  //         100,
  //         Math.round((allData.length / total) * 100)
  //       );
  //       setFetchProgress(percent);
  
  //       // Update visible data
  //       setFullData([...allData]);
  //       setTotalRecords(total);
  //       setTotalPages(Math.ceil(total / perPage));
  //       if (currentPage === 1) {
  //         paginateData(allData, 1, perPage);
  //       }
  
  //       currentPage++;
  //       shouldContinue = allData.length < total;
  //     } catch (err) {
  //       console.error("Chunk fetch failed", err);
  //       shouldContinue = false;
  //       toast.error("Something went wrong while auto-fetching.");
  //     }
  //   }
  
  //   setShowProgressBar(false);
  // };
  

  const fetchDataBySearch = () => {
    if (recordPerTable !== "") {
      setPage(Number(pageNumber));

      // if(optionInObject?.StateName && category === 'Laptop'){
      //   fetchDataInChunks();
      // }
      // else{
        fetchData(recordPerTable, optionInObject, Number(pageNumber));
      // }
    } else {
      alert("Please Select Table and Record Per Table");
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });

        // Get the first sheet
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Parse the sheet into JSON format
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        console.log("jsonData: ", jsonData);
        setExcelData(jsonData);
      };
      reader.readAsBinaryString(file);
    }
  };

  const handleImportClick = () => {
    setPosting(true);

    if (!excelData || excelData.length === 0) {
      toast.error("No data to upload. Please upload a valid Excel file.");
      setPosting(false);
      return;
    }

    const domain = localStorage.getItem("domain");

    axios
      .post(`${domain}/upload-excel`, { data: excelData })
      .then((response) => {
        toast.success("Data uploaded successfully!");
        const fileInput = document.getElementById("fileInput");
        fileInput.value = "";
        setExcelData(null);
        setPosting(false);
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
        toast.error("Data Failed to Upload");
        setPosting(false);
      });
  };

  const downloadExcelFormat = () => {
    const headers = [
      "Name",
      "Address",
      "PhoneNumber",
      "Pincode",
      "VillageName",
      "TalukaName",
      "DistrictName",
      "StateName",
      "BankName",
      "doa",
      "ctype",
      "cname",
      "dob",
      "ladd",
      "padd",
      "email",
      "adr",
      "gender",
      "uid",
      "fname",
      "altno",
      "operator",
    ];

    data.push(headers);

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, "upload_format.xlsx");
  };

  const tableRangeOptions = [
    { label: "1 - 50", value: "1-50" },
    { label: "51 - 100", value: "51-100" },
    { label: "101 - 150", value: "101-150" },
    { label: "151 - 200", value: "151-200" },
    { label: "201 - 250", value: "201-250" },
    { label: "251 - 300", value: "251-300" },
    { label: "301 - 350", value: "301-350" },
    { label: "351 - 400", value: "351-400" },
    { label: "401 - 450", value: "401-450" },
    { label: "451 - 500", value: "451-500" },
    { label: "501 - 550", value: "501-550" },
    { label: "551 - 600", value: "551-600" },
  ];

  const categoryOptions = [
    { label: "Bombay", value: "Bombay" },
    { label: "Store & Mall", value: "Store & Mall" },
    { label: "Cinema", value: "Cinema" },
    { label: "College", value: "College" },
    { label: "Doctor", value: "Doctor" },
    { label: "Electricity", value: "Electricity" },
    { label: "Petrol Pump", value: "Petrol Pump" },
    { label: "Restaurant", value: "Restaurant" },
    { label: "School", value: "School" },
    { label: "Temple", value: "Temple" },
    { label: "Wership", value: "Wership" },
    { label: "Laptop", value: "Laptop" },
  ];

  const exportOptions = [
    { value: "Name", label: "Name" },
    { value: "PhoneNumber", label: "PhoneNumber" },
    { value: "Pincode", label: "Pincode" },
    { value: "StateName", label: "StateName" },
    { value: "DistrictName", label: "DistrictName" },
    { value: "BankName", label: "BankName" },
    { value: "doa", label: "doa" },
    { value: "ctype", label: "ctype" },
    { value: "cname", label: "cname" },
    { value: "dob", label: "dob" },
    { value: "ladd", label: "ladd" },
    { value: "padd", label: "padd" },
    { value: "email", label: "email" },
    { value: "adr", label: "adr" },
    { value: "gender", label: "gender" },
    { value: "uid", label: "uid" },
    { value: "fname", label: "fname" },
    { value: "VillageName", label: "VillageName" },
    { value: "TalukaName", label: "TalukaName" },
    { value: "Address", label: "Address" },
    { value: "altno", label: "altno" },
    { value: "operator", label: "operator" },
  ];

  return (
    <div
      className="container mt-3 p-8"
      style={{ maxWidth: "95%", position: "relative" }}
    >
      {loading && (
        <div className="loading-overlay">
          <div className="loading-text">
            Loading<span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </div>
        </div>
      )}

      {posting && (
        <div className="loading-overlay">
          <div className="loading-text">
            Uploading<span className="loading-dot"></span>
            <span className="loading-dot"></span>
            <span className="loading-dot"></span>
          </div>
        </div>
      )}
      
      <div className={loading ? "blur-background" : ""}>
        <Row className="d-flex align-items-end">
          <Col sm={6}>
            <Form.Group controlId="formGridState">
              <Form.Label>Select Column to Export</Form.Label>
              <MultiSelect
                options={exportOptions}
                value={columnsForExport}
                onChange={setColumnsForExport}
                labelledBy="Select"
              />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <InputGroup
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              {/* <Col sm={8} className="d-flex flex-col">
                <Form.Label style={{ marginLeft: "15px" }}>
                  Select Range (
                  {`From ${data.length > 0 ? data[0].id : "N/A"} To ${
                    data.length > 0 ? data[data.length - 1].id : "N/A"
                  }`}
                  ) to Export
                </Form.Label>
                <Col className="d-flex gap-3 align-items-center">
                  <FormControl
                    placeholder="from `id`"
                    value={fromExportRecord}
                    onChange={(e) => setFromExportRecord(e.target.value)}
                  />
                  <Form.Label className="mt-2">To</Form.Label>
                  <FormControl
                    placeholder="to `id`"
                    value={toExportRecord}
                    onChange={(e) => setToExportRecord(e.target.value)}
                  />
                </Col>
              </Col> */}

              <Col
                style={{ maxWidth: "fit-content", maxHeight: "fit-content" }}
              >
                <Button
                  variant="primary"
                  onClick={exportData}
                  style={{ padding: "6px 22px", borderRadius: "5px" }}
                >
                  Export
                </Button>
              </Col>
            </InputGroup>
          </Col>
        </Row>

        <Form.Group controlId="formGridState" className="mb-3 mt-5">
          <Row className="d-flex align-items-end">
            <Col style={{ flex: "0 0 13%" }}>
              <Form.Label>Record Per Page</Form.Label>
              <FormControl
                placeholder="eg. 100"
                value={recordPerTable}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "") {
                    setRecordPerTable("");
                    setTotalPages(1);
                    setData([]);
                  } else if (!isNaN(value) && Number(value) > 0) {
                    const numericValue = Number(value);
                    setRecordPerTable(numericValue);
                    const newTotalPages = Math.ceil(
                      fullData.length / numericValue
                    );
                    setTotalPages(newTotalPages);
                    setPage(1);
                    setPageNumber(1);
                    paginateData(fullData, 1, numericValue);
                  }
                }}
              />
            </Col>

            <Col style={{ flex: "0 0 11%" }}>
              <Form.Label>Page No.</Form.Label>
              <FormControl
                placeholder="eg. 1"
                value={pageNumber}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "") {
                    setPageNumber("");
                  } else if (
                    !isNaN(value) &&
                    value >= 1 &&
                    value <= totalPages
                  ) {
                    const numericValue = Number(value);
                    setPageNumber(numericValue);
                    setPage(numericValue);
                    paginateData(
                      fullData,
                      numericValue,
                      Number(recordPerTable)
                    );
                  }
                }}
              />
            </Col>

            <Col style={{ flex: "0 0 14%" }}>
              <Form.Label>Select Category</Form.Label>
              <Form.Control
                className="cursor-pointer"
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)} // Set selected value to state
              >
                {categoryOptions.map((optionItem) => (
                  <option key={optionItem.value} value={optionItem.value}>
                    {optionItem.label}
                  </option>
                ))}
              </Form.Control>
            </Col>

            <Col style={{ flex: "0 0 12%" }}>
              <Form.Label>Table Range</Form.Label>
              <Form.Control
                className="cursor-pointer"
                disabled={isTableRangeDisabled}
                as="select"
                value={tableRange}
                onChange={(e) => setTableRange(e.target.value)}
              >
                {tableRangeOptions.map((optionItem) => (
                  <option key={optionItem.value} value={optionItem.value}>
                    {optionItem.label}
                  </option>
                ))}
              </Form.Control>
            </Col>

            <Col sm={4} className="d-flex flex-col" style={{ flex: "0 0 30%" }}>
              <Form.Label>Upload Excel File</Form.Label>
              <InputGroup>
                <FormControl
                  id="fileInput"
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileUpload}
                />
                <Button
                  variant="primary"
                  onClick={handleImportClick}
                  style={{ padding: "6px 22px" }}
                >
                  Import
                </Button>
              </InputGroup>
            </Col>

            <Col
              style={{ flex: "0 0 20%" }}
              className="border-[0.5px] border-gray-200 text-center"
            >
              <Form.Label className="text-[12px]">
                Download Excel Template to upload
              </Form.Label>
              <Button
                variant="primary"
                onClick={downloadExcelFormat}
                style={{ padding: "6px 22px" }}
              >
                Download
              </Button>
            </Col>
          </Row>

          <Row
            className="mt-4 mb-2"
            style={{ display: "flex", alignItems: "end" }}
          >
            <Col sm={4}>
              <Form.Label>Select Options to Filter</Form.Label>
              <MultiSelect
                options={exportOptions}
                value={option} // option should now be an array
                onChange={onSelectChange}
                labelledBy="Select"
              />
            </Col>
            <Col
              sm={5}
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              {option.map((selectedOption) => {
                const field = selectedOption.value;
                return (
                  <FormControl
                    key={field}
                    placeholder={field}
                    value={optionInObject[field] || ""}
                    onChange={(e) => handleInputChange(e, field)}
                  />
                );
              })}
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Button variant="primary" onClick={fetchDataBySearch}>
                Search
              </Button>
              <Button
                variant="primary"
                onClick={clearFilter}
                style={{ marginLeft: "10px" }}
              >
                Clear Filter
              </Button>
            </Col>
          </Row>
        </Form.Group>

        <div className="flex flex-row justify-between items-center mt-14">
          <div className="flex items-center gap-x-2">
            <h5 className="text-gray-600 font-montserrat">Total Page: </h5>
            <h6>{totalPages}</h6>
          </div>

          <div className="flex items-center gap-x-2">
            <h5 className="text-gray-600 font-montserrat">Current Page: </h5>
            <h6>{page}</h6>
          </div>
          <div className="flex items-center gap-x-2">
            <h5 className="text-gray-600 font-montserrat">Current Record:</h5>
            <h6 className="flex gap-x-2 items-center">
              From
              {data.length > 0 ? (
                <span className="font-bold"> {data[0].id} </span>
              ) : (
                "N/A"
              )}
              To
              {data.length > 0 ? (
                <span className="font-bold"> {data[data.length - 1].id}</span>
              ) : (
                "N/A"
              )}
            </h6>
          </div>
          <div className="flex items-center gap-x-2">
            <h5 className="text-gray-600 font-montserrat">Total Record: </h5>

            <h6>{totalRecords}</h6>
          </div>
        </div>


        {/* {showProgressBar && (
  <div
    style={{
      width: "100%",
      height: "50px",
      backgroundColor: "green",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      zIndex: 9999,
    }}
  >
    <span>Fetching Data: {fetchProgress}%</span>
    <div
      style={{
        flex: 1,
        height: "10px",
        backgroundColor: "#ffffff33",
        borderRadius: "5px",
        overflow: "hidden",
        marginLeft: "20px",
      }}
    >
      <div
        style={{
          width: `${fetchProgress}%`,
          height: "100%",
          backgroundColor: "white",
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
  </div>
)} */}

{showProgressBar && (
  <div
    style={{
      width: "100%",
      height: "50px",
      backgroundColor: "green",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      zIndex: 9999,
    }}
  >
    <span>Fetching Data: {fetchProgress}%</span>
    <div
      style={{
        flex: 1,
        height: "10px",
        backgroundColor: "#ffffff33",
        borderRadius: "5px",
        overflow: "hidden",
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <div
        style={{
          width: `${fetchProgress}%`,
          height: "100%",
          backgroundColor: "white",
          transition: "width 0.3s ease-in-out",
        }}
      />
    </div>
    <button
      onClick={() => {
        if (abortController) {
          abortController.abort();
          setShowProgressBar(false);
          toast.error("Fetch cancelled by user.");
        }
      }}
      style={{
        padding: "6px 12px",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Stop Fetching
    </button>
  </div>
)}




        <Table striped bordered hover>
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              {columns.map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((record, index) => (
              <tr key={index}>
                <td>{record.id}</td>
                {columns.map((col, i) => (
                  <td key={i}>
                    {record[col] !== undefined ? record[col] : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {totalPages > 1 && <Pagination>{renderPagination()}</Pagination>}
          <p className="mt-3">
            Total Records: <strong>{totalRecords}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchData2;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Select from "react-select";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { MultiSelect } from "react-multi-select-component";
// import {
//   Table,
//   Pagination,
//   InputGroup,
//   FormControl,
//   Button,
//   Form,
//   Row,
//   Col,
//   FormGroup,
// } from "react-bootstrap";
// import useConditionalBootstrap from "./UseConditionalBootstrap";
// import * as XLSX from "xlsx";
// import "./DataTable.css"; // Import the CSS file for styling

// const SearchData2 = () => {
//   useConditionalBootstrap();

//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState("");
//   // const [option, setOption] = useState("name");
//   const [option, setOption] = useState([{ value: "Name", label: "Name" }]);
//   const [optionInObject, setOptionInObject] = useState({ Name: "" });
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [columnsForExport, setColumnsForExport] = useState([
//     { value: "Name", label: "Name" },
//     { value: "PhoneNumber", label: "PhoneNumber" },
//     { value: "Pincode", label: "Pincode" },
//     { value: "StateName", label: "StateName" },
//   ]);
//   const [fromExportRecord, setFromExportRecord] = useState();
//   const [toExportRecord, setToExportRecord] = useState();
//   const [recordPerTable, setRecordPerTable] = useState(1000);
//   const [columns, setColumns] = useState([
//     "Name",
//     "PhoneNumber",
//     "Pincode",
//     "StateName",
//     "DistrictName",
//   ]);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [posting, setPosting] = useState(false);
//   const [excelData, setExcelData] = useState([]);
//   const [tableRange, setTableRange] = useState("1-50");
//   const [category, setCategory] = useState("Bombay");
//   const [fullData, setFullData] = useState([]);

//   const isTableRangeDisabled = category !== "Laptop";

//   // useEffect(() => {
//   //   // fetchData(recordPerTable, "name", "", 1);
//   //   fetchData(recordPerTable, optionInObject, 1);
//   // }, []);

//   // const fetchData = async (recordPerTable, option, filter, page) => {
//   // const fetchData = async (recordPerTable, optionInObj, page) => {
//   //   setLoading(true); // Show loading spinner
//   //   try {

//   //     const domain = localStorage.getItem("domain");
//   //     const response = await axios.get(
//   //       `${domain}/search-table`,

//   //       {
//   //         params: {
//   //           recordPerTable,
//   //           optionInObj,
//   //           page,
//   //           tableRange: tableRange,
//   //           category: category,
//   //         },
//   //       }
//   //     );

//   //     console.log('response: ',response.data['bc_01']);

//   //     let allData = [];
//   //     let totalCount = 0;

//   //     for (const table in response.data) {
//   //       console.log('table: ',table);
//   //       const tableData = response.data[table].map((record) => {
//   //         const { Name, PhoneNumber, Pincode, StateName, DistrictName } =
//   //           record;
//   //         return {
//   //           Name: Name || "",
//   //           PhoneNumber: PhoneNumber || "",
//   //           Pincode: Pincode !== undefined ? Pincode : null,
//   //           StateName: StateName || "",
//   //           DistrictName: DistrictName || "",
//   //         };
//   //       });

//   //       totalCount += response.data[table].length;
//   //       allData = [...allData, ...tableData];
//   //     }

//   //     console.log("allData: ", allData);
//   //     console.log("paggge: ", page);

//   //     // Assign sequential IDs based on the current page
//   //     const startId = (page - 1) * allData.length + 1; // Assuming 100 records per page
//   //     allData = allData.map((item, index) => ({
//   //       ...item,
//   //       id: startId + index,
//   //     }));

//   //     setData(allData);

//   //     console.log("fetchedData: ", data);
//   //     setTotalPages(
//   //       Math.max(
//   //         ...Object.values(response.data).map((table) => table.last_page)
//   //       )
//   //     );
//   //     setTotalRecords(totalCount);
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   } finally {
//   //     setLoading(false); // Hide loading spinner
//   //   }
//   // };

//   // const fetchData = async (recordPerTable, optionInObj, page) => {
//   //   setLoading(true);
//   //   try {
//   //     const domain = localStorage.getItem("domain");
//   //     const response = await axios.get(`${domain}/search-table`, {
//   //       params: {
//   //         recordPerTable,
//   //         optionInObj,
//   //         page,
//   //         tableRange,
//   //         category,
//   //       },
//   //     });

//   //     // Flatten all records from bc_01, bc_02, ...
//   //     let allData = [];
//   //     for (const table in response.data) {
//   //       const tableData = response.data[table].map((record) => {
//   //         const { Name, PhoneNumber, Pincode, StateName, DistrictName } = record;
//   //         return {
//   //           Name: Name || "",
//   //           PhoneNumber: PhoneNumber || "",
//   //           Pincode: Pincode !== undefined ? Pincode : null,
//   //           StateName: StateName || "",
//   //           DistrictName: DistrictName || "",
//   //         };
//   //       });

//   //       allData = [...allData, ...tableData];
//   //     }

//   //     const totalCount = allData.length;

//   //     // Calculate pagination
//   //     const startIndex = (page - 1) * recordPerTable;
//   //     const endIndex = startIndex + recordPerTable;
//   //     const paginatedData = allData.slice(startIndex, endIndex);

//   //     // Assign sequential IDs
//   //     const startId = startIndex + 1;
//   //     const dataWithIds = paginatedData.map((item, index) => ({
//   //       ...item,
//   //       id: startId + index,
//   //     }));

//   //     setData(dataWithIds);
//   //     setTotalRecords(totalCount);
//   //     setTotalPages(Math.ceil(totalCount / recordPerTable));
//   //   } catch (error) {
//   //     console.error("Error fetching data:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const fetchData = async () => {
//     const hasValidFilter = Object.values(optionInObject).some(
//       (val) => val && val.trim() !== ""
//     );

//     if (!hasValidFilter) {
//       toast.error("Please fill at least one filter value to search.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const domain = localStorage.getItem("domain");
//       const response = await axios.get(`${domain}/search-table`, {
//         params: {
//           recordPerTable,
//           optionInObj: optionInObject,
//           page: 1, // only used for server, irrelevant if fetching all
//           tableRange,
//           category,
//         },
//       });

//       let allData = [];
//       for (const table in response.data) {
//         const tableData = response.data[table].map((record) => {
//           const { Name, PhoneNumber, Pincode, StateName, DistrictName } = record;
//           return {
//             Name: Name || "",
//             PhoneNumber: PhoneNumber || "",
//             Pincode: Pincode !== undefined ? Pincode : null,
//             StateName: StateName || "",
//             DistrictName: DistrictName || "",
//           };
//         });
//         allData = [...allData, ...tableData];
//       }

//       setFullData(allData);
//       setTotalRecords(allData.length);
//       setTotalPages(Math.ceil(allData.length / recordPerTable));

//       // Set data for page 1
//       paginateData(allData, 1, recordPerTable);
//       setPage(1);
//       setPageNumber(1);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const renderPagination = () => {
//   //   const pages = [];
//   //   const maxPagesToShow = 5;
//   //   const startPage = Math.max(1, page - 2);
//   //   const endPage = Math.min(totalPages, page + 2);

//   //   if (page > 1) {
//   //     pages.push(
//   //       <Pagination.Prev
//   //         key="prev"
//   //         onClick={() => {
//   //           const newPage = page - 1;
//   //           setPage(newPage);
//   //           fetchData(recordPerTable, optionInObject, newPage);
//   //           setPageNumber(newPage);
//   //         }}
//   //       />
//   //     );
//   //   }

//   //   for (let num = 1; num <= totalPages; num++) {
//   //     if (
//   //       num === 1 ||
//   //       num === totalPages ||
//   //       (num >= startPage && num <= endPage)
//   //     ) {
//   //       pages.push(
//   //         <Pagination.Item
//   //           key={num}
//   //           active={num === page}
//   //           onClick={() => {
//   //             setPage(num);
//   //             fetchData(recordPerTable, optionInObject, num);
//   //             setPageNumber(num);
//   //           }}
//   //         >
//   //           {num}
//   //         </Pagination.Item>
//   //       );
//   //     } else if (num === startPage - 1 || num === endPage + 1) {
//   //       pages.push(<Pagination.Ellipsis key={`ellipsis-${num}`} />);
//   //     }
//   //   }

//   //   if (page < totalPages) {
//   //     pages.push(
//   //       <Pagination.Next
//   //         key="next"
//   //         onClick={() => {
//   //           const newPage = page + 1;
//   //           setPage(newPage);
//   //           fetchData(recordPerTable, optionInObject, newPage);
//   //           setPageNumber(newPage);
//   //         }}
//   //       />
//   //     );
//   //   }

//   //   return pages;
//   // };

//   const paginateData = (dataArray, currentPage, perPage) => {
//     const startIndex = (currentPage - 1) * perPage;
//     const endIndex = startIndex + perPage;
//     const sliced = dataArray.slice(startIndex, endIndex).map((item, index) => ({
//       ...item,
//       id: startIndex + index + 1,
//     }));
//     setData(sliced);
//   };

//   const renderPagination = () => {
//     const pages = [];
//     const maxPagesToShow = 5;
//     const half = Math.floor(maxPagesToShow / 2);
//     let startPage = Math.max(1, page - half);
//     let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

//     if (endPage - startPage < maxPagesToShow - 1) {
//       startPage = Math.max(1, endPage - maxPagesToShow + 1);
//     }

//     // Prev
//     if (page > 1) {
//       pages.push(
//         <Pagination.Prev
//           key="prev"
//           onClick={() => {
//             const newPage = page - 1;
//             setPage(newPage);
//             setPageNumber(newPage);
//             paginateData(fullData, newPage, Number(recordPerTable));
//           }}
//         />
//       );
//     }

//     // Page numbers
//     for (let num = startPage; num <= endPage; num++) {
//       pages.push(
//         <Pagination.Item
//           key={num}
//           active={num === page}
//           onClick={() => {
//             setPage(num);
//             setPageNumber(num);
//             paginateData(fullData, num, Number(recordPerTable));
//           }}
//         >
//           {num}
//         </Pagination.Item>
//       );
//     }

//     // Next
//     if (page < totalPages) {
//       pages.push(
//         <Pagination.Next
//           key="next"
//           onClick={() => {
//             const newPage = page + 1;
//             setPage(newPage);
//             setPageNumber(newPage);
//             paginateData(fullData, newPage, Number(recordPerTable));
//           }}
//         />
//       );
//     }

//     return pages;
//   };

//   const exportData = () => {
//     data.map((item) => console.log(item.id));
//     let exportLimitedData;
//     if (columnsForExport.length !== 0) {
//       if (fromExportRecord !== "" && toExportRecord !== "") {
//         exportLimitedData = data.filter(
//           (item) => item.id >= fromExportRecord && item.id <= toExportRecord
//         );
//       } else {
//         exportLimitedData = data;
//       }

//       const exportData = exportLimitedData.map((record) => {
//         const filteredRecord = {};
//         columnsForExport.forEach((col) => {
//           const column = col.value;
//           filteredRecord[column] =
//             record[column] !== undefined ? record[column] : null;
//         });
//         return filteredRecord;
//       });

//       const worksheet = XLSX.utils.json_to_sheet(exportData);
//       const workbook = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
//       XLSX.writeFile(workbook, "export.xlsx");
//     } else {
//       alert("please Select Column and Id range to Export");
//     }
//   };

//   // const onSelectChange = (e) => {
//   //   setOption(e.target.value);
//   // };
//   // const onSelectChange = (selectedOptions) => {
//   //   const newOptions = selectedOptions.reduce((acc, item) => {
//   //     acc[item.value] = item.label; // Assuming you want to store each option's value and label
//   //     return acc;
//   //   }, {}); // Initialize as empty object

//   //   // Update state with the new object
//   //   setOptionInObject(newOptions);

//   //   console.log("optionInObject: ", optionInObject); // Now logging the updated object correctly

//   //   setOption(selectedOptions); // Assuming `option` is an array state variable
//   // };

//   const onSelectChange = (selectedOptions) => {
//     // Update selected options
//     setOption(selectedOptions);
//     // Initialize the filter values based on selected options
//     const newFilterValues = {};
//     selectedOptions.forEach((item) => {
//       newFilterValues[item.value] = ""; // Initialize with empty strings
//     });
//     setOptionInObject(newFilterValues);
//   };

//   const handleInputChange = (e, field) => {
//     const newValue = e.target.value;
//     setOptionInObject((prevValues) => ({
//       ...prevValues,
//       [field]: newValue, // Update the specific field value in the object
//     }));
//   };

//   const clearFilter = () => {
//     setData([]);
//     setPage(1);
//     setFilter("");
//     setOption([{ value: "Name", label: "Name" }]);
//     setCategory("Bombay");
//     setTableRange("1-50");
//     setPageNumber(1);
//     setFromExportRecord("");
//     setToExportRecord("");
//     setRecordPerTable(10);
//     setColumnsForExport([
//       { value: "Name", label: "Name" },
//       { value: "PhoneNumber", label: "PhoneNumber" },
//       { value: "Pincode", label: "Pincode" },
//       { value: "StateName", label: "StateName" },
//     ]);
//   };

//   const fetchDataBySearch = () => {
//     if (recordPerTable !== "") {
//       setPage(Number(pageNumber));
//       // fetchData(recordPerTable, option, filter, Number(pageNumber));
//       fetchData(recordPerTable, optionInObject, Number(pageNumber));
//     } else {
//       alert("Please Select Table and Record Per Table");
//     }
//   };

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const binaryStr = event.target.result;
//         const workbook = XLSX.read(binaryStr, { type: "binary" });

//         // Get the first sheet
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];

//         // Parse the sheet into JSON format
//         const jsonData = XLSX.utils.sheet_to_json(sheet);
//         console.log("jsonData: ", jsonData);
//         setExcelData(jsonData);
//       };
//       reader.readAsBinaryString(file);
//     }
//   };

//   // const handleImportClick = () => {
//   //   setPosting(true);
//   //   if (!excelData || excelData.length === 0) {
//   //     toast.error("No data to upload. Please upload a valid Excel file.");
//   //     return;
//   //   }
//   //   const domain = localStorage.getItem("domain");
//   //   axios
//   //     .post(`${domain}/upload-excel`, { data: excelData })
//   //     .then((response) => {
//   //       setPosting(false);
//   //       toast.success("Data uploaded successfully!");
//   //       const fileInput = document.getElementById("fileInput");
//   //       fileInput.value = "";

//   //       setExcelData(null);
//   //     })
//   //     .catch((error) => {
//   //       setPosting(false);
//   //       console.error("Error uploading data:", error);
//   //       toast.error("Data Failed to Upload");
//   //     });
//   //     setPosting(false);
//   // };

//   const handleImportClick = () => {
//     setPosting(true);

//     if (!excelData || excelData.length === 0) {
//       toast.error("No data to upload. Please upload a valid Excel file.");
//       setPosting(false); // ✅ Still keep this one for validation fail
//       return;
//     }

//     const domain = localStorage.getItem("domain");

//     axios
//       .post(`${domain}/upload-excel`, { data: excelData })
//       .then((response) => {
//         toast.success("Data uploaded successfully!");
//         const fileInput = document.getElementById("fileInput");
//         fileInput.value = "";
//         setExcelData(null);
//         setPosting(false); // ✅ success: turn off loading
//       })
//       .catch((error) => {
//         console.error("Error uploading data:", error);
//         toast.error("Data Failed to Upload");
//         setPosting(false); // ✅ failure: turn off loading
//       });
//   };

//   const downloadExcelFormat = () => {
//     // Define the columns that you want as headers in the Excel sheet
//     const headers = [
//       "Name",
//       "Address",
//       "PhoneNumber",
//       "Pincode",
//       "VillageName",
//       "TalukaName",
//       "DistrictName",
//       "StateName",
//       "BankName",
//       "doa",
//       "ctype",
//       "cname",
//       "dob",
//       "ladd",
//       "padd",
//       "email",
//       "adr",
//       "gender",
//       "uid",
//       "fname",
//       "altno",
//       "operator",
//     ];

//     // Create an empty array of data (rows) to create the file
//     const data = [];

//     // Add an empty row (just the headers, no data yet)
//     data.push(headers);

//     // Create a new workbook and add the worksheet with headers
//     const ws = XLSX.utils.aoa_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

//     // Create a file download prompt for the user
//     XLSX.writeFile(wb, "upload_format.xlsx");
//   };

//   const tableRangeOptions = [
//     { label: "1 - 50", value: "1-50" },
//     { label: "51 - 100", value: "51-100" },
//     { label: "101 - 150", value: "101-150" },
//     { label: "151 - 200", value: "151-200" },
//     { label: "201 - 250", value: "201-250" },
//     { label: "251 - 300", value: "251-300" },
//     { label: "301 - 350", value: "301-350" },
//     { label: "351 - 400", value: "351-400" },
//     { label: "401 - 450", value: "401-450" },
//     { label: "451 - 500", value: "451-500" },
//     { label: "501 - 550", value: "501-550" },
//     { label: "551 - 600", value: "551-600" },
//   ];

//   const categoryOptions = [
//     { label: "Bombay", value: "Bombay" },
//     { label: "Store & Mall", value: "Store & Mall" },
//     { label: "Cinema", value: "Cinema" },
//     { label: "College", value: "College" },
//     { label: "Doctor", value: "Doctor" },
//     { label: "Electricity", value: "Electricity" },
//     { label: "Petrol Pump", value: "Petrol Pump" },
//     { label: "Restaurant", value: "Restaurant" },
//     { label: "School", value: "School" },
//     { label: "Temple", value: "Temple" },
//     { label: "Wership", value: "Wership" },
//     { label: "Laptop", value: "Laptop" },
//   ];

//   const exportOptions = [
//     { value: "Name", label: "Name" },
//     { value: "PhoneNumber", label: "PhoneNumber" },
//     { value: "Pincode", label: "Pincode" },
//     { value: "StateName", label: "StateName" },
//     { value: "DistrictName", label: "DistrictName" },
//     { value: "BankName", label: "BankName" },
//     { value: "doa", label: "doa" },
//     { value: "ctype", label: "ctype" },
//     { value: "cname", label: "cname" },
//     { value: "dob", label: "dob" },
//     { value: "ladd", label: "ladd" },
//     { value: "padd", label: "padd" },
//     { value: "email", label: "email" },
//     { value: "adr", label: "adr" },
//     { value: "gender", label: "gender" },
//     { value: "uid", label: "uid" },
//     { value: "fname", label: "fname" },
//     { value: "VillageName", label: "VillageName" },
//     { value: "TalukaName", label: "TalukaName" },
//     { value: "Address", label: "Address" },
//     { value: "altno", label: "altno" },
//     { value: "operator", label: "operator" },
//   ];

//   return (
//     <div
//       className="container mt-3 p-8"
//       style={{ maxWidth: "95%", position: "relative" }}
//     >
//       {loading && (
//         <div className="loading-overlay">
//           <div className="loading-text">
//             Loading<span className="loading-dot"></span>
//             <span className="loading-dot"></span>
//             <span className="loading-dot"></span>
//           </div>
//         </div>
//       )}

// {posting && (
//         <div className="loading-overlay">
//           <div className="loading-text">
//             Uploading<span className="loading-dot"></span>
//             <span className="loading-dot"></span>
//             <span className="loading-dot"></span>
//           </div>
//         </div>
//       )}
//       <div className={loading ? "blur-background" : ""}>
//         <Row className="d-flex align-items-end">
//           <Col sm={6}>
//             <Form.Group controlId="formGridState">
//               <Form.Label>Select Column to Export</Form.Label>
//               <MultiSelect
//                 options={exportOptions}
//                 value={columnsForExport}
//                 onChange={setColumnsForExport}
//                 labelledBy="Select"
//               />
//             </Form.Group>
//           </Col>
//           <Col sm={6}>
//             <InputGroup
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "end",
//               }}
//             >
//               <Col sm={8} className="d-flex flex-col">
//                 <Form.Label style={{ marginLeft: "15px" }}>
//                   Select Range (
//                   {`From ${data.length > 0 ? data[0].id : "N/A"} To ${
//                     data.length > 0 ? data[data.length - 1].id : "N/A"
//                   }`}
//                   ) to Export
//                 </Form.Label>
//                 <Col className="d-flex gap-3 align-items-center">
//                   <FormControl
//                     placeholder="from `id`"
//                     value={fromExportRecord}
//                     onChange={(e) => setFromExportRecord(e.target.value)}
//                   />
//                   <Form.Label className="mt-2">To</Form.Label>
//                   <FormControl
//                     placeholder="to `id`"
//                     value={toExportRecord}
//                     onChange={(e) => setToExportRecord(e.target.value)}
//                   />
//                 </Col>
//               </Col>

//               <Col
//                 style={{ maxWidth: "fit-content", maxHeight: "fit-content" }}
//               >
//                 <Button
//                   variant="primary"
//                   onClick={exportData}
//                   style={{ padding: "6px 22px", borderRadius: "5px" }}
//                 >
//                   Export
//                 </Button>
//               </Col>
//             </InputGroup>
//           </Col>
//         </Row>

//         {/* <Form.Group controlId="formGridState" className="mb-3 mt-3">
//           <Row className="d-flex align-items-end">
//             <Col sm={2}>
//               <Form.Label>Record Per Table</Form.Label>
//               <FormControl
//                 placeholder="eg. 100"
//                 value={recordPerTable}
//                 onChange={(e) => setRecordPerTable(e.target.value)}
//               />
//             </Col>
//             <Col sm={2}>
//               <Form.Label>Page No.</Form.Label>
//               <FormControl
//                 placeholder="eg. 1"
//                 value={pageNumber}
//                 // onChange={(e) => setPageNumber(e.target.value)}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   // if (Number(value) >= 1 && Number(value) <= totalPages) {
//                   //   setPageNumber(value); // Update page number state on input change
//                   // }
//                   if (value === "") {
//                     setPageNumber(""); // Allow clearing the page number
//                   } else if (
//                     !isNaN(value) &&
//                     value >= 1 &&
//                     value <= totalPages
//                   ) {
//                     setPageNumber(value); // Update page number if it's valid
//                   }
//                 }}
//               />
//             </Col>
//             <Col sm={3}>
//               <Form.Label>Select Option to Filter</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={option}
//                 onChange={onSelectChange}
//               >
//                 {exportOptions.map((optionItem) => (
//                   <option key={optionItem.value} value={optionItem.value}>
//                     {optionItem.label}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Col>
//             <Col sm={5}>
//               <InputGroup>
//                 <FormControl
//                   placeholder={`Filter By ${option}`}
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                 />
//                 <Button variant="primary" onClick={fetchDataBySearch}>
//                   Search
//                 </Button>
//                 <Button
//                   variant="primary"
//                   onClick={clearFilter}
//                   style={{ marginLeft: "10px" }}
//                 >
//                   Clear Filter
//                 </Button>
//               </InputGroup>
//             </Col>
//           </Row>
//         </Form.Group> */}

//         <Form.Group controlId="formGridState" className="mb-3 mt-5">
//           <Row className="d-flex align-items-end">
//             {/* <Col style={{ flex: "0 0 13%" }}>
//               <Form.Label>Record Per Table</Form.Label>
//               <FormControl
//                 placeholder="eg. 100"
//                 value={recordPerTable}
//                 onChange={(e) => setRecordPerTable(e.target.value)}
//               />
//             </Col> */}

// <Col style={{ flex: "0 0 13%" }}>
//   <Form.Label>Record Per Page</Form.Label>
//   <FormControl
//     placeholder="eg. 100"
//     value={recordPerTable}
//     onChange={(e) => {
//       const value = e.target.value;

//       if (value === "") {
//         setRecordPerTable("");
//         setTotalPages(1);
//         setData([]);
//       } else if (!isNaN(value) && Number(value) > 0) {
//         const numericValue = Number(value);
//         setRecordPerTable(numericValue);
//         const newTotalPages = Math.ceil(fullData.length / numericValue);
//         setTotalPages(newTotalPages);
//         setPage(1);
//         setPageNumber(1);
//         paginateData(fullData, 1, numericValue);
//       }
//     }}
//   />
// </Col>

//             {/* <Col style={{ flex: "0 0 11%" }}>
//               <Form.Label>Page No.</Form.Label>
//               <FormControl
//                 placeholder="eg. 1"
//                 value={pageNumber}
//                 onChange={(e) => {
//                   const value = e.target.value;

//                   if (value === "") {
//                     setPageNumber("");
//                   } else if (
//                     !isNaN(value) &&
//                     value >= 1 &&
//                     value <= totalPages
//                   ) {
//                     setPageNumber(value);
//                   }
//                 }}
//               />
//             </Col> */}

// <Col style={{ flex: "0 0 11%" }}>
//   <Form.Label>Page No.</Form.Label>
//   <FormControl
//     placeholder="eg. 1"
//     value={pageNumber}
//     onChange={(e) => {
//       const value = e.target.value;

//       if (value === "") {
//         setPageNumber("");
//       } else if (!isNaN(value) && value >= 1 && value <= totalPages) {
//         const numericValue = Number(value);
//         setPageNumber(numericValue);
//         setPage(numericValue);
//         paginateData(fullData, numericValue, Number(recordPerTable));
//       }
//     }}
//   />
// </Col>

//             {/* <Col style={{ flex: "0 0 20%" }}>
//               <Form.Label>Select Table Range</Form.Label>
//               <Form.Control
//                 as="select"
//                 value={tableRange}
//                 onChange={setTableRange}
//               >
//                 {exportOptions.map((optionItem) => (
//                   <option key={optionItem.value} value={optionItem.value}>
//                     {optionItem.label}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Col> */}

//             <Col style={{ flex: "0 0 14%" }}>
//               <Form.Label>Select Category</Form.Label>
//               <Form.Control
//                 className="cursor-pointer"
//                 as="select"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)} // Set selected value to state
//               >
//                 {categoryOptions.map((optionItem) => (
//                   <option key={optionItem.value} value={optionItem.value}>
//                     {optionItem.label}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Col>

//             <Col style={{ flex: "0 0 12%" }}>
//               <Form.Label>Table Range</Form.Label>
//               <Form.Control
//                 className="cursor-pointer"
//                 disabled={isTableRangeDisabled}
//                 as="select"
//                 value={tableRange}
//                 onChange={(e) => setTableRange(e.target.value)} // Set selected value to state
//               >
//                 {tableRangeOptions.map((optionItem) => (
//                   <option key={optionItem.value} value={optionItem.value}>
//                     {optionItem.label}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Col>

//             <Col sm={4} className="d-flex flex-col" style={{ flex: "0 0 30%" }}>
//               <Form.Label>Upload Excel File</Form.Label>
//               <InputGroup>
//                 <FormControl
//                   id="fileInput"
//                   type="file"
//                   accept=".xlsx, .xls"
//                   onChange={handleFileUpload} // handleFileUpload function is for processing file
//                 />
//                 <Button
//                   variant="primary"
//                   onClick={handleImportClick}
//                   style={{ padding: "6px 22px" }}
//                 >
//                   Import
//                 </Button>
//               </InputGroup>
//             </Col>

//             <Col
//               style={{ flex: "0 0 20%" }}
//               className="border-[0.5px] border-gray-200 text-center"
//             >
//               <Form.Label className="text-[12px]">
//                 Download Excel Template to upload
//               </Form.Label>
//               <Button
//                 variant="primary"
//                 onClick={downloadExcelFormat}
//                 style={{ padding: "6px 22px" }}
//               >
//                 Download
//               </Button>
//             </Col>
//           </Row>

//           <Row
//             className="mt-4 mb-2"
//             style={{ display: "flex", alignItems: "end" }}
//           >
//             <Col sm={4}>
//               <Form.Label>Select Options to Filter</Form.Label>
//               <MultiSelect
//                 options={exportOptions}
//                 value={option} // option should now be an array
//                 onChange={onSelectChange}
//                 labelledBy="Select"
//               />
//             </Col>
//             <Col
//               sm={5}
//               style={{ display: "flex", flexDirection: "column", gap: "5px" }}
//             >
//               {/* <FormControl
//                   placeholder={`Filter By ${option}`}
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                 /> */}

//               {option.map((selectedOption) => {
//                 const field = selectedOption.value;
//                 return (
//                   <FormControl
//                     key={field}
//                     placeholder={field}
//                     value={optionInObject[field] || ""}
//                     onChange={(e) => handleInputChange(e, field)}
//                   />
//                 );
//               })}
//             </Col>
//             <Col style={{ textAlign: "right" }}>
//               <Button variant="primary" onClick={fetchDataBySearch}>
//                 Search
//               </Button>
//               <Button
//                 variant="primary"
//                 onClick={clearFilter}
//                 style={{ marginLeft: "10px" }}
//               >
//                 Clear Filter
//               </Button>
//             </Col>
//           </Row>
//         </Form.Group>

//         <div className="flex flex-row justify-between items-center mt-14">
//           <div className="flex items-center gap-x-2">
//             <h5 className="text-gray-600 font-montserrat">Total Page: </h5>
//             <h6>{totalPages}</h6>
//           </div>

//           <div className="flex items-center gap-x-2">
//             <h5 className="text-gray-600 font-montserrat">Current Page: </h5>
//             <h6>{page}</h6>
//           </div>
//           <div className="flex items-center gap-x-2">
//             {/* <h5>Current Record: </h5>
//               <h6>
//       {`From ${data.length > 0 ? data[0].id : 'N/A'} To ${
//         data.length > 0 ? data[data.length - 1].id : 'N/A'
//       }`}
//     </h6> */}
//             <h5 className="text-gray-600 font-montserrat">Current Record:</h5>
//             <h6 className="flex gap-x-2 items-center">
//               From
//               {data.length > 0 ? (
//                 <span className="font-bold"> {data[0].id} </span>
//               ) : (
//                 "N/A"
//               )}
//               To
//               {data.length > 0 ? (
//                 <span className="font-bold"> {data[data.length - 1].id}</span>
//               ) : (
//                 "N/A"
//               )}
//             </h6>
//           </div>
//           <div className="flex items-center gap-x-2">
//             <h5 className="text-gray-600 font-montserrat">Total Record: </h5>

//             <h6>{totalRecords}</h6>
//           </div>
//         </div>

//         <Table striped bordered hover>
//           <thead className="thead-dark">
//             <tr>
//               <th>ID</th>
//               {columns.map((key) => (
//                 <th key={key}>{key}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.id}</td>
//                 {columns.map((col, i) => (
//                   <td key={i}>
//                     {record[col] !== undefined ? record[col] : null}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           {totalPages > 1 && <Pagination>{renderPagination()}</Pagination>}
//           <p className="mt-3">
//             Total Records: <strong>{totalRecords}</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchData2;
