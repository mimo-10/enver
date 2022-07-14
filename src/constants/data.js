import { images } from "../constants/images"
import {MdAutoAwesomeMotion, MdDesignServices} from "react-icons/md"
import {IoMdPhotos} from "react-icons/io"
import {TbFileCode} from "react-icons/tb"
import {SiMaterialdesignicons} from "react-icons/si"
import {AiTwotoneVideoCamera} from "react-icons/ai";
const data =  {
    services: [
        [
            <TbFileCode style={{
                filter: "invert(45%) sepia(58%) saturate(7222%) hue-rotate(343deg) brightness(89%) contrast(107%)"
            }}/>,
            "Development",
            "Create a platform with the best and coolest quality from us.",
            "rgb(240, 64, 55, 0.4)"
        ],
        [
            <SiMaterialdesignicons style={{
                filter: "invert(56%) sepia(81%) saturate(6319%) hue-rotate(229deg) brightness(85%) contrast(94%)"
            }}/>,
            "UI/UX Designer",
            "We provide UI/UX Design services, and of course with the best quality",
            "rgba(84, 84, 212, 0.4)"
        ],
        [
            <MdDesignServices style={{
                filter: "invert(55%) sepia(99%) saturate(395%) hue-rotate(356deg) brightness(107%) contrast(97%)"
            }}/>,
            "Graphic Designer",
            "We provide Graphic Design services, with the best designers",
            "rgba(251, 168, 28, 0.4)"
        ],
        [
            <MdAutoAwesomeMotion style={{
                filter: "invert(56%) sepia(81%) saturate(6319%) hue-rotate(229deg) brightness(85%) contrast(94%)"
            }}/>,
            "Motion Graphic",
            "Create a platform with the best and coolest quality from us.",
            "rgba(84, 84, 212, 0.4)"
        ],
        [
            <IoMdPhotos style={{
                filter: "invert(55%) sepia(99%) saturate(395%) hue-rotate(356deg) brightness(107%) contrast(97%)"
            }}/>,
            "Photography",
            "We provide Photography services, and of course with the best quality",
            "rgba(251, 168, 28, 0.4)"
        ],
        [
            <AiTwotoneVideoCamera style={{
                filter: "invert(45%) sepia(58%) saturate(7222%) hue-rotate(343deg) brightness(89%) contrast(107%)"
            }}/>,
            "Videography",
            "Create a platform with the best and coolest quality from us.",
            "rgb(240, 64, 55, 0.4)"
        ]
    ],
    portfolio: [
        images.portf1,
        images.portf2,
        images.portf3
    ]
}

export default data;