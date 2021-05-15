import modelS from "../assets/images/model-s.jpg";
import modelX from "../assets/images/model-x.jpg";
import modelY from "../assets/images/model-y.jpg";
import model3 from "../assets/images/model-3.jpg";
import solarPanels from "../assets/images/solar-panels.jpg";
import solarRoof from "../assets/images/solar-roof.jpg";
import accessories from "../assets/images/accessories.jpg";


export type ISection = {
    anchor?: string;
    title: string;
    description: string;
    backgroundImg: string;
    leftBtnText: string;
    rightBtnText?: string;
    titleColor?: string;
    buttonColor?: string;
    arrowColor?: string;
}


export const testSections: ISection[] = [
    {
        anchor: "models",
        title: "Model S",
        description: "Order online for Touchless Delivery",
        leftBtnText: "Custom order",
        rightBtnText: "Existing inventory",
        backgroundImg: modelS,
    },
    {
        anchor: "modely",
        title: "Model Y",
        description: "Order online for Touchless Delivery",
        leftBtnText: "Custom order",
        rightBtnText: "Existing inventory",
        backgroundImg: modelY,
    },
    {
        anchor: "model3",
        title: "Model 3",
        description: "Order online for Touchless Delivery",
        leftBtnText: "Custom order",
        rightBtnText: "Existing inventory",
        backgroundImg: model3,
    },
    {
        anchor: "modelx",
        title: "Model X",
        description: "Order online for Touchless Delivery",
        leftBtnText: "Custom order",
        rightBtnText: "Existing inventory",
        backgroundImg: modelX,
        arrowColor: "white",
    },
    {
        //anchor: "solar-panels",
        title: "Lowest cost Solar Panels in America",
        description: "Money-back guarantee",
        leftBtnText: "Order now",
        rightBtnText: "Learn more",
        backgroundImg: solarPanels,
        arrowColor: "white",
    },
    {
        //anchor: "solar-roof",
        title: "Solar for New Roofs",
        description: "Solar Roof Costs Less than a New Roof plus Solar Panels",
        leftBtnText: "Order now",
        rightBtnText: "Learn more",
        backgroundImg: solarRoof,
        arrowColor: "white",
    },
    {
        title: "Accessories",
        description: "",
        leftBtnText: "Shop now",
        backgroundImg: accessories,
    },
];

