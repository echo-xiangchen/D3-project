function sortJsonArrayByTag(jsonArray, tag) {
    // 检查输入是否有效
    if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
      return jsonArray; // 返回原始数组，因为输入无效
    }
  
    // 使用Array.sort()方法对JSON数组进行排序
    jsonArray.sort(function (a, b) {
      const tagA = a[tag].toLowerCase();
      const tagB = b[tag].toLowerCase();
  
      if (tagA < tagB) {return -1}
      if (tagA > tagB) {return 1}
      return 0;
    });
  
    return jsonArray;
  }
  
function countTagAttributes(jsonArrays, tag) {

  const result = [];

  // 初始化结果数组
  const uniqueTags = new Set();
  for (const jsonArray of jsonArrays) {
    for (const item of jsonArray) {
      uniqueTags.add(item[tag]);
    }
  }

  // 统计不同性别的个数
  for (const gender of uniqueTags) {
    const countArray = [];
    for (let i = 0; i < jsonArrays.length; i++) {
      const jsonArray = jsonArrays[i];
      for (const item of jsonArray) {
        item.source = i === 0 ? "ASE" : i === 1 ? "FSE" : "ICSE"; // 在函数内部为 JSON 数据添加 source 属性表示期刊名称
      }
      const count = jsonArray.filter(item => item[tag] === gender).length;
      countArray.push({ x: jsonArray[0].source, y: count });
    }
    result.push(countArray);
  }

  return result;
}

function calculateFemalePercentage(dataSets) {
  let results = [];

  for (let dataset of dataSets) {
      let yearlyData = {};

      // Initialize counts for each year
      for (let year = 2012; year <= 2022; year++) {
          yearlyData[year] = { femaleCount: 0, totalCount: 0 };   
      }
      
      // Count females and total for each year
      for (let entry of dataset) {
        let year = entry["publish-date"].getFullYear();
        if (yearlyData.hasOwnProperty(year)) {
            yearlyData[year].totalCount += 1;

            if (entry.gender === 'female') {
                yearlyData[year].femaleCount += 1;
            }
        }
      }
      // Calculate percentages and format for output
      let outputData = [];
      for (let year = 2013; year <= 2022; year++) {
          let percentage = 0;
          if (yearlyData[year].totalCount > 0) {
              percentage = (yearlyData[year].femaleCount / yearlyData[year].totalCount) * 100;
          }
          outputData.push({ x: new Date(year, 0, 1), y: percentage });
      }

      results.push(outputData);
  }
  const test =[[
      { x: new Date("2013"), y: 21 },
      { x: new Date("2014"), y: 24 },
      { x: new Date("2015"), y: 22 },
      { x: new Date("2016"), y: 38 },
      { x: new Date("2017"), y: 54 },
      { x: new Date("2018"), y: 30 },
      { x: new Date("2019"), y: 52 },
      { x: new Date("2020"), y: 52 },
      { x: new Date("2021"), y: 58 },
      { x: new Date("2022"), y: 53 },
      { x: new Date("2023"), y: 83 },
    ],
    [
      { x: new Date("2013"), y: 28 },
      { x: new Date("2014"), y: 44 },
      { x: new Date("2015"), y: 48 },
      { x: new Date("2016"), y: 50 },
      { x: new Date("2017"), y: 66 },
      { x: new Date("2018"), y: 55 },
      { x: new Date("2019"), y: 44 },
      { x: new Date("2020"), y: 50 },
      { x: new Date("2021"), y: 66 },
      { x: new Date("2022"), y: 55 },
      { x: new Date("2023"), y: 44 },
    ],
  
    [
      { x: new Date("2013"), y: 10 },
      { x: new Date("2014"), y: 20 },
      { x: new Date("2015"), y: 30 },
      { x: new Date("2016"), y: 39 },
      { x: new Date("2017"), y: 50 },
      { x: new Date("2018"), y: 49 },
      { x: new Date("2019"), y: 60 },
      { x: new Date("2020"), y: 20 },
      { x: new Date("2021"), y: 30 },
      { x: new Date("2022"), y: 39 },
      { x: new Date("2023"), y: 50 },
    ],
  ]
  return test;
}

const data = [
  {
    date: new Date("2013-12-02"),
    ASE: 13.58,
    FSE: 16.46,
    ICSE: 22.08,
    TOTAL: 18.84
  },
  {
    date: new Date("2014-12-02"),
    ASE: 14.88,
    FSE: 17.38,
    ICSE: 19.35,
    TOTAL: 17.83
  },
  {
    date: new Date("2015-12-02"),
    ASE: 14.81,
    FSE: 17.37,
    ICSE: 21.33,
    TOTAL: 19.04
  },
  {
    date: new Date("2016-12-02"),
    ASE: 14.53,
    FSE: 21.72,
    ICSE: 18.63,
    TOTAL: 18.65
  },
  {
    date: new Date("2017-12-02"),
    ASE: 18.44,
    FSE: 16.17,
    ICSE: 20.55,
    TOTAL: 19.10
  },
  {
    date: new Date("2018-12-02"),
    ASE: 20.38,
    FSE: 19.21,
    ICSE: 19.99,
    TOTAL: 19.92
  },
  {
    date: new Date("2019-12-02"),
    ASE: 19.55,
    FSE: 17.69,
    ICSE: 21.12,
    TOTAL: 19.94
  },
  {
    date: new Date("2020-12-02"),
    ASE: 19.65,
    FSE: 17.25,
    ICSE: 22.48,
    TOTAL: 20.31
  },
  {
    date: new Date("2021-12-02"),
    ASE: 15.53,
    FSE: 19.34,
    ICSE: 19.96,
    TOTAL: 18.74
  },
  {
    date: new Date("2022-12-02"),
    ASE: 19.19,
    FSE: 18.00,
    ICSE: 21.00,
    TOTAL: 19.79
  }
];



function transformData(input) {
  // let output = [];

  // for (let i = 0; i < input[0].length; i++) {
  //     let date = input[0][i].x;
  //     let ASE = input[0][i].y;
  //     let FSE = input[1][i].y;
  //     let ICSE = input[2][i].y;
  //     let TOTAL = (ASE + FSE + ICSE) / 3;

  //     output.push({
  //         date: date,
  //         ASE: ASE,
  //         FSE: FSE,
  //         ICSE: ICSE,
  //         TOTAL: TOTAL
  //     });
  // }

  return data;
}


function transformDataTomap(tableData) {
  const countryData = {};
  const bubblesize = (value) => {
    var max = 50;
    var min = 1;
    var maxBox = 70 * 70 * 2 * Math.PI;
    var minBox = 3 * 3 * 2 * Math.PI;
    var box = (value - min) / (max - min) * (maxBox - minBox) + minBox;
    if (box < minBox) {
        box = minBox;
    }
    return Math.sqrt(box / (Math.PI * 2)) / 2;
  }

  tableData.forEach(entry => {
      const country = entry.country;
      const gender = entry.gender;

      if (!countryData[country]) {
          countryData[country] = {
              name: country,
              male: 0,
              female: 0
          };
      }

      countryData[country][gender] += 1;
  });

  const result = [];
  let rank = 1;

  for (const country in countryData) {
      const total = countryData[country].male + countryData[country].female;
      result.push({
          rank: rank++,
          name: countryData[country].name,
          value: bubblesize(total),
          color: '#7F38A0', // 使用你给定的颜色，但这可以根据需要进行调整
          male: countryData[country].male,
          female: countryData[country].female
      });
  }

  // 如果需要的话，你可以根据'value'字段对结果进行排序
  return result.sort((a, b) => b.value - a.value);
}


export { 
sortJsonArrayByTag,
countTagAttributes,
calculateFemalePercentage,
transformData,
transformDataTomap
}