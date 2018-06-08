// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });

  // OAuth stuff
  authorizationURL = "https://login.salesforce.com/services/oauth2/authorize"
			+ "?response_type=token"
			+ "&client_id=3MVG9lKcPoNINVBIPJjdw1J9LLJbP_pqwoJYyuisjQhr_LLurNDv7AgQvDTZwCoZuDZrXcPCmBv4o.8ds.5iE"
			+ "&redirect_uri=user_callback.html"
			+ "&state=mystate"
	redirectURL = "user_callback.html" // The URL where you is redirected back, and where you perform run the callback() function.

  let client = new JSO({
		providerID: "salesforce",
		client_id: "541950296471.apps.googleusercontent.com",
		redirect_uri: redirectURL,
		authorization: authorizationURL,
		scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
	})

};

