import React from 'react';

export default function Portfolio() {

    const workTiles = [{
        img: "https://openmrs.org/wp-content/uploads/2021/08/cropped-OpenMRSlogo-transparent.png",
        imgAlt: "",
        projectName: "OpenMRS",
        projectOwner: "OpenMRS",
        projectDescription: "An open-source project to develop software to support the delivery of health care.",
        projectURL: "https://openmrs.org/"
    },{
        img: "https://lh3.googleusercontent.com/kKuNRapCWzFbQWnhKCpzOaMJFShoBZeTEHHmDXyW5hCRHLCDpXqKkdub3dowKody8mxy",
        imgAlt: "",
        projectName: "OneTill",
        projectOwner: "LociAfrica",
        projectDescription: "OneTill is an e-wallet web application used for saving money, requesting loans, and purchasing goods and services.",
        projectURL: "https://onetill.biz/#/login"
    }, {
        img: "https://lh3.googleusercontent.com/00GwJKvnO_4cJjiSnTFZRpWdl1Ps5SBhUeOji967uVyhwouw3fP9UPU9iqCOse696NQ",
        imgAlt: "",
        projectName: "OPRS",
        projectOwner: "NCA",
        projectDescription: "OPRS (Online Project Registration System) is a web application used in the registration and verification of construction projects.",
        projectURL: "https://oprs.nca.go.ke/"
    },
    {
        img: "https://lh3.googleusercontent.com/kKuNRapCWzFbQWnhKCpzOaMJFShoBZeTEHHmDXyW5hCRHLCDpXqKkdub3dowKody8mxy",
        imgAlt: "",
        projectName: "OneTill Mobile Application",
        projectOwner: "LociAfrica",
        projectDescription: "OneTill Mobile app is the an e-wallet mobile application used for saving money, requesting loans, and purchasing goods and services.",
        projectURL: "https://play.google.com/store/apps/details?id=com.lociafrica.onetill"
    },
    {
        img: "https://lh3.googleusercontent.com/00GwJKvnO_4cJjiSnTFZRpWdl1Ps5SBhUeOji967uVyhwouw3fP9UPU9iqCOse696NQ",
        imgAlt: "",
        projectName: "NCA Ujenzi Mobile Application",
        projectOwner: "NCA",
        projectDescription: "NCA Ujenzi is a mobile application to be used by the NCA compliance officers for site inspections.",
        projectURL: "https://play.google.com/store/apps/details?id=com.nca.oprs"
    },
    {
        img: "https://lh3.googleusercontent.com/00GwJKvnO_4cJjiSnTFZRpWdl1Ps5SBhUeOji967uVyhwouw3fP9UPU9iqCOse696NQ",
        imgAlt: "",
        projectName: "NCA Mobile Application",
        projectOwner: "NCA",
        projectDescription: "NCA app is a mobile application for verifying NCA staff, tracking registered construction projects and contractor companies.",
        projectURL: "https://play.google.com/store/apps/details?id=com.nca.nca_app"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPK-6Jfpxm0K8mPIhB_njVcN__D1OgT1DchA&usqp=CAU",
        imgAlt: "",
        projectName: "Ampath Employee Management System",
        projectOwner: "Ampath",
        projectDescription: "Employee Management System.",
        projectURL: "https://github.com/AMPATH/ampath-employee-management"
    }];

    const WorkTile = (props) => {
        return (
            <a href={props.projectURL} class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a>
                    <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img} alt={props.imgAlt} />
                </a>
                <div class="p-5">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <a>{props.projectName}</a>
                    </h3>
                    <span class="text-gray-500 dark:text-gray-400">{props.projectOwner}</span>
                    <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{props.projectDescription}</p>
                    <ul class="flex space-x-4 sm:mt-0">
                        <li>
                            <a href={props.projectURL} class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </a>
        );
    };

    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Projects</h2>
                    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of projects that I've crafted.</p>
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {workTiles.map((value, index) => (
                        <WorkTile img={value.img} imgAlt={value.imgAlt} projectName={value.projectName} projectOwner={value.projectOwner} projectDescription={value.projectDescription} projectURL={value.projectURL} />
                    ))}
                </div>
            </div>
        </section>
    )
}