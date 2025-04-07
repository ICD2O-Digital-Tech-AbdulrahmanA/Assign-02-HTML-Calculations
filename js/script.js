// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Abdul
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";

// Function to calculate and display surface area and volume
function calculateCylinder() {
  // get radius and height values from user input 
  let radius = parseFloat(document.getElementById("radius").value);
  let height = parseFloat(document.getElementById("height").value);

  // constants
  const PI = Math.PI;

  // surface area = 2πr² + 2πrh
  const surfaceArea = 2 * PI * radius * radius + 2 * PI * radius * height;

  // volume = πr²h
  const volume = PI * radius * radius * height;

  // round to 2 decimal place for display
  const roundedSurfaceArea = surfaceArea.toFixed(2);
  const roundedVolume = volume.toFixed(2);

  // display results
  document.getElementById("result").innerText = "Surface Area: " + roundedSurfaceArea + " cm² Volume: " + roundedVolume + " cm³";

}

