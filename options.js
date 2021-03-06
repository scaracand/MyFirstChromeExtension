// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

let page = document.getElementById('buttonDiv');
constructOptions(kButtonColors);

function constructOptions(kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.classList.add("waves-effect", "waves-light", "btn");
    button.innerHTML = item;
    button.style.backgroundColor = item;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      });
    });
    page.appendChild(button);
  }
}
