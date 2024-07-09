

import {
    stackedCustomSeries, 
    stackedPrimaryXAxis, 
    stackedPrimaryYAxis,
} from "./StackChartDP";

import {
    lineCustomSeries,
    LinePrimaryXAxis,
    LinePrimaryYAxis,
} from "./LineChartDP";

import {
    ASE,
    FSE,
    ICSE,
    Overall
} from './map-data/data'

import wordData from './data/wordCluster'

export {
    stackedCustomSeries, 
    stackedPrimaryXAxis, 
    stackedPrimaryYAxis,
    lineCustomSeries,
    LinePrimaryXAxis,
    LinePrimaryYAxis,
    ASE,
    FSE,
    ICSE,
    Overall,
    wordData
}


/** here we store the pargragph  */
export const abstract = [
    "This research investigates the extent of female representation in prestigious software engineering conferences, namely ASE (Automated Software Engineering), FSE (Foundations of Software Engineering), and ICSE (International Conference on Software Engineering). Gender diversity in the field of software engineering has gained increasing attention in recent years due to the desire for a more inclusive and equitable research community.",
    "Through a comprehensive analysis of publicly available conference proceedings and attendee data, this study quantifies the participation of women in these conferences over a specified timeframe. Additionally, it examines the trends and factors that may contribute to disparities in representation, including gender-based barriers, submission acceptance rates, and the influence of research topics and subfields.",
    "Our analysis reveals multifaceted perspectives and debates regarding the underrepresentation of women in prestigious research outlets. We explore the various factors contributing to this disparity, including institutional barriers, gender biases, and systemic inequalities. Furthermore, we examine the consequences of this underrepresentation, such as limited visibility and opportunities for female researchers, and its broader implications for the advancement of gender equality in academia.",
    "The findings from this study shed light on the current state of gender representation within the software engineering research community, highlighting areas where progress has been made and areas that require attention. By understanding the dynamics of female participation in ASE, FSE, and ICSE, this research aims to inform strategies for promoting diversity, inclusivity, and gender equity in these prestigious academic gatherings, ultimately contributing to a more robust and representative software engineering research landscape.",
]
export const tableIntroduction = [
    "We have compiled a table that aggregates the paper title, author full names, author countries, author genders, and author concepts from the top 3 conferences in Software Engineering, which are ASE, FSE, and ICSE. This comprehensive collection provides valuable insights into the diversity and content of publications across these journals, allowing for a more comprehensive understanding of the research landscape."
]

export const StackChartIntroduction = [
    "This stack chart illustrates the comparative volumes of female and male researchers contributing to the ASE, FSE, and ICSE conferences over the past 10 years.",
]

export const LineChartIntroduction = [
    "This line chart displays the annual count of female researchers contributing to ASE, FSE, and ICSE conferences over the past decade",
]
