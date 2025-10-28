const unit = {
  length: ["Millimeter (mm)", "Centimeter (cm)", "Meter (m)", "Kilometer (km)"],
  mass: ['Miligram (mg)', 'Gram (g)', 'Kilogram (kg)', 'Ton (t)']
};


const rate = {
  "Millimeter (mm)": 0.001,
  "Centimeter (cm)": 0.01,
  "Meter (m)": 1,
  "Kilometer (km)": 1000,
  
  'Miligram (mg)': 0.000001,
  'Gram (g)': 0.001,
  'Kilogram (kg)': 1,
  'Ton (t)': 1000
};


function changeUnit() {
  const pickConverter = document.getElementById("pickConverter").value;
  const convertV1 = document.getElementById("convertV1");
  const convertV2 = document.getElementById("convertV2");
  
  
  convertV1.innerHTML = "";
  convertV2.innerHTML = "";
  
  
  if (unit[pickConverter]) {
    unit[pickConverter].forEach(item => {
      const opt1 = document.createElement("option");
      const opt2 = document.createElement("option");
      opt1.text = item;
      opt1.value = item;
      opt2.text = item;
      opt2.value = item;
      convertV1.add(opt1);
      convertV2.add(opt2);
    });
  }
  
  
  if (pickConverter === "length") {
    document.getElementById("inputV1").value = 1;
    document.getElementById("inputV2").value = 100;
    convertV1.value = "Meter (m)";
    convertV2.value = "Centimeter (cm)";
  } else if(pickConverter === "mass") {
    document.getElementById("inputV1").value = 1;
    document.getElementById("inputV2").value = 1000;
    convertV1.value = "Kilogram (kg)";
    convertV2.value = "Gram (g)";
  }
}


function convertValue() {
  const from = document.getElementById("convertV1").value;
  const to = document.getElementById("convertV2").value;
  const input1 = parseFloat(document.getElementById("inputV1").value) || 0;
  const input2 = document.getElementById("inputV2");
  
  const base = input1 * rate[from];
  const result = base / rate[to];
  input2.value = parseFloat(result.toFixed(6));
}


function convertValueReverse() {
  const from = document.getElementById("convertV2").value;
  const to = document.getElementById("convertV1").value;
  const input2 = parseFloat(document.getElementById("inputV2").value) || 0;
  const input1 = document.getElementById("inputV1");
  
  const base = input2 * rate[from];
  const result = base / rate[to];
  input1.value = parseFloat(result.toFixed(6));
}


window.onload = () => {
  changeUnit();
  convertValue();
};

