import React, { Component } from "react";

class Company extends Component {
    componentDidMount() {
        const ul = this.ulRef;
        if (ul) {
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        }
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <header
                className="flex flex-col items-center px-5 text-lg font-medium text-center bg-white text-black text-opacity-90 md:mt-[100vh] mt-[630px]"
                aria-label="Landing Component"
                role="banner"
            >
                <div className="font-myfontbold font-bold max-md:max-w-full text-xl md:text-3xl text-[#e27daa] border-b-2 border-[#e27daa]">
                    Trusted by 14+ gobal brands
                </div>
                <div
                    className="w-full inline-flex flex-nowrap"
                >
                    <ul
                        ref={(el) => this.ulRef = el}
                        className="mt-2 flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll"
                    >
                        <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
                            <img src="/company/1.jpeg" alt="google" className="md:w-[160px] w-[100px]" />
                        </li>
                        <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
                            <img src="/company/2.jpeg" alt="ibm" className="md:w-[160px] w-[100px]" />
                        </li>
                        <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
                            <img src="/company/3.jpeg" alt="apple" className="md:w-[160px] w-[100px]" />
                        </li>
                        <li className="mx-[20px] sm:mx-[50px] md:mx-[50px]">
                            <img src="company/4.jpeg" alt="amazon" className="md:w-[160px] w-[100px]" />
                        </li>
                    </ul>

                </div>
            </header>
        );
    }
}

export default Company;
