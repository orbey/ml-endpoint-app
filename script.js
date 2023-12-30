document.getElementById('mlForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const endpointUrl = document.getElementById('endpointUrl').value;

    // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token value
    const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImlhdCI6MTcwMzkwMTczMywibmJmIjoxNzAzOTAxNzMzLCJleHAiOjE3MDM5MDY1NzQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWVFBZS84VkFBQUFaaE10QTZzSjdzZENoMnRMZWF1YkJVZG1EUkFNeVhDYXZrdTQ2Visxc3VQZ1BTdGlsZUNMN2ZVS2dmL3JUVy9EUTVvSzN3STk4V2o3MnAxR1B5U05SVzh2YnBLaUNaaExXYnZhWXJuM1lTODNDQ1BjQUM1Yk01ZDAyTyt5ZUlKUW5USG15NlpmM3ZzeGxyb0RhT01OdEorR1BSNHhLOFNHRDZoNFBWaXMyK3c9IiwiYW1yIjpbInJzYSIsIm1mYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImNvbnRyb2xzIjpbImFwcF9yZXMiXSwiY29udHJvbHNfYXVkcyI6WyIwMDAwMDAwOS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiXSwiZGV2aWNlaWQiOiI1Yzk0OTE5Yy0wNTY2LTQyZDMtOGY0Ny05MmViY2UwNjYzNmYiLCJmYW1pbHlfbmFtZSI6Ik9yYmV5IiwiZ2l2ZW5fbmFtZSI6IkVyZW4iLCJpcGFkZHIiOiI3Ni4xOS4xNjguMTk1IiwibmFtZSI6IkVyZW4gT3JiZXkiLCJvaWQiOiIwNzAxMjIyYi1mM2ZmLTQ1NDctYmI4Yi1lYzQ3Y2FlNzBjNTciLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTI0NTI1MDk1LTcwODI1OTYzNy0xNTQzMTE5MDIxLTIwNzU3MDQiLCJwdWlkIjoiMTAwMzIwMDE5MkU1MjY0MiIsInJoIjoiMC5BUm9BdjRqNWN2R0dyMEdScXkxODBCSGJSd2tBQUFBQUFBQUF3QUFBQUFBQUFBQWFBUGMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRzJGcGJlZ1NaTHd0R0JGbHlmQTlycHF3VzJvVkROSzd6c0pzQkVMOWxEdyIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoiZXJlbm9yYmV5QG1pY3Jvc29mdC5jb20iLCJ1cG4iOiJlcmVub3JiZXlAbWljcm9zb2Z0LmNvbSIsInV0aSI6IlYyel9uR29sZ0V1Sk80eVd4NHJQQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl19.Jy_z1G_07G-FKdaevkhAf0TeWE0O3T5JV3jY891XH2_k1OWCfI7K0nPQrHkBg9pSUUaEgoJ63jpkoCK2ATLFH1Sj-fa5eHnUdH-gadaUU7xGoOYMtpOE-hAc_VgY8-zQ_Nv70o6xpCquba4ipabkTAr4WM5X94F-WmSHAZzVljBjpZAgMZNWQoNmtQ1i4odUr1Yobzc1BdnqiBgHdRfBtUJCbITPo1G8axmUcxe7AecMtRTVwcqSksOldD8edj6O1SrjPZePUWL0heeQh_Yszg6KGcH89K0Rf2fU9xlGQSX7mOvZ7btUJHAxvPRNLJTV3eqfRWmcebeZtJVquy-lIw';

    // Generate JSON payload based on individual values
    const keyValuePairs = document.querySelectorAll('#keyValuePairs .input-group');

    const individualData = {};
    keyValuePairs.forEach(pair => {
        const key = pair.querySelector('input:nth-child(1)').value;
        const value = pair.querySelector('input:nth-child(2)').value;
    
        // Check if the value is numeric and parse it accordingly
        individualData[key] = !isNaN(value) ? parseFloat(value) : value;
    });

    const inputData = `[${JSON.stringify(individualData)}]`;
    console.log(inputData)

    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`,
        },
        body: inputData,
    })
    .then(response => {
        console.log(inputData)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('output').innerText = `Model Output: ${data}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Add event listener for adding key/value pairs
document.getElementById('addKeyValuePairBtn').addEventListener('click', function () {
    const keyValuePairs = document.getElementById('keyValuePairs');
    const newKeyValuePair = document.createElement('div');
    newKeyValuePair.classList.add('input-group', 'mb-3');
    newKeyValuePair.innerHTML = `
        <input type="text" class="form-control" placeholder="Key">
        <input type="text" class="form-control" placeholder="Value">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary remove-key-value-btn" type="button">Remove</button>
        </div>
    `;
    keyValuePairs.appendChild(newKeyValuePair);

    // Add event listener to remove key/value pair
    newKeyValuePair.querySelector('.remove-key-value-btn').addEventListener('click', function () {
        newKeyValuePair.remove();
    });
});