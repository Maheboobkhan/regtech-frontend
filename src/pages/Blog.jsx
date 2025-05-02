import React from 'react';
import data from '../components/jsonData/CustomerVerification.json';
import FooterForAllComponent from '../components/FooterForAllPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Blog extends React.Component {
    componentDidMount() {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className='mt-24 font-myfont' data-aos="fade-up-left">
                <div className="relative z-[-2] bg-[#e27daa] md:h-[80px] h-[50px] w-[60%] mt-[20px]">
                    <h1 className="absolute top-1/2 left-[52%] transform w-full -translate-x-1/2 uppercase -translate-y-1/2 text-white md:text-2xl text-[12px] font-myfont tracking-wider">
                        RegTech blog
                    </h1>
                    <div className="absolute top-0 left-[17%] h-full w-full transform -skew-x-[40deg] bg-[#e27daa] -z-10"></div>
                </div>

                <div className="md:flex mt-8 p-4 justify-center">
                    <img
                        src="https://cdn.pixabay.com/photo/2014/02/13/07/28/wordpress-265132_1280.jpg"
                        alt="Image 1"
                        className="md:w-1/3 h-fit w-full h-auto object-cover"
                    />
                    <div className="md:w-1/2 w-full md:pl-4 pl-2 md:ml-8">
                        <h1 className="text-2xl font-semibold text-[#e27daa]">
                            Title-Mandatory Regulation Compliance for Gaming App - <span className='text-[#e27daa]'>Regtech API</span>
                        </h1>
                        <p className='mt-2'>Meta Description - In this article, we have discussed the importance of regulatory compliance in the gaming industry, its effects on the company, and solutions by Regtech API.</p>
                        <p className='mt-3'>Post-pandemic period the growth of the Gaming Industry has been touching new heights, Millions of users are joining every day. The gaming industry is not just about playing games online but it has become a great way to earn money. Users can now earn money online while playing online. Users are generating considerable money with it</p>

                        <h1 className="text-xl font-semibold mt-6 text-[#e27daa]">
                            Why need for regulations in online gaming.
                        </h1>
                        <p className='mt-2'>The increasing popularity and user base of the gaming app have created a lot of new challenges for the government. To make sure fair practice is being followed, Consumer protection, Data Privacy, or any other threat to the user should be eliminated, Regulation Compliance was introduced. Illegal activities such as money laundering have also increased with the increase of gaming apps. To monitor such illegal activities, a regulatory framework was a necessary step.</p>

                        <h1 className="text-xl mt-10 font-semibold text-[#e27daa]">
                            Why government introduced regulations.
                        </h1>
                        <p className='mt-2'><span className='text-xl text-[#e27daa]'>Consumer Protection:</span> The gaming Industry has a huge database including adults teenagers and children. To safeguard the interests of the user, better transparency, and to address concerns such as privacy, and appropriate content as per age, regulation compliance was a necessary step.</p>

                        <p className='mt-2'><span className='text-xl text-[#e27daa]'>Game Addiction:</span> Some games are very addictive and can create a negative impact on the user. Since many of the users are young people and children it was important to monitor the playtime and age verification regulations in the app.</p>

                        <p className='mt-2'><span className='text-xl text-[#e27daa]'>Fair Practice:</span> Regulation helps to create fair competition between users aiming to create an equal playing level between them. It helps to restrict unfair advantages to any user or developer or eliminate explosive monetary policies, gambling, and fraudulent schemes.</p>

                        <p className='mt-2'><span className='text-xl text-[#e27daa]'>Data Privacy: </span> The gaming app has access to much data on your mobile or laptop, given by you. They collect and store many informative data about you. The regulation compliance helps you to create a restriction for the misuse or unauthorized access of user data and guidelines for the use of users' data.</p>


                        <h1 className="text-xl mt-10 font-semibold text-[#e27daa]">
                        How the regulations compliance have affected the gaming industry.
                        </h1>
                        <p>The introduction of “The Information Technology Act, 2021, Prevention of Money Laundering Act or Consumer Protection Act, 2019” for the gaming industry has created huge operational challenges in front of companies</p>

                        <p>Gaming companies have to make operational changes to compile with regulations. Changes in the app, implementing and maintaining a system for data security according to the Acts. It also increased the operational cost of the company such as hiring a team for this specific purpose and implementing new technology. One of the most significant problems faced by the company is User experience. The increased number of verification a user has to go through, it could create a negative impact on the user journey. A user can get irritated and opt out of the app. Resulting in losing of users and hampering the expansion of the company.</p>

                        <p>The gaming company has to make sure the user experience don't get affected due to the many regulations compliance a company has to adhere to. There should be smooth user onboarding and user experience.</p>

                        <p>Don't worry Regtech API has a solution that can help gaming company to bypass the regulation and create a smooth user experience.</p>



                        <h1 className="text-xl mt-10 font-semibold text-[#e27daa]">
                        What Regtech API bring on plate.
                        </h1>
                        <p>Regtech API helps gaming companies verify the user details such as Aadhar and Pan card in one click by the use of API. API is easily integral and helps you to create a smooth journey for the users.</p>
                    </div>
                </div>
            </div>
        )

    }
}

export default Blog;