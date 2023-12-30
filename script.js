 // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token value
 const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImlhdCI6MTcwMzkwNjAzNCwibmJmIjoxNzAzOTA2MDM0LCJleHAiOjE3MDM5MTA3ODgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWVFBZS84VkFBQUFWTVVLQ1Q4V2tjR1RXSlRtSzRxK2xKSHNXV25OMlQxOUdIOVFyS1hUZDZkVzFhLzMxVWxUM09XTVlNQ2NCN2VRdmgwb2FYZ3hNRVBoZFVlSnlXQzJFcEpwLzQzc2I2d2FpaFR4dmFVZVRSSkJBamhzMU5DZHZmK1AvMW1qTzl1eWNhaFBaUGV6UkdjTUVpZlpMakxkY3I0eWxkU28zSGNnSCtFeVYvUmNPYjA9IiwiYW1yIjpbInJzYSIsIm1mYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImNvbnRyb2xzIjpbImFwcF9yZXMiXSwiY29udHJvbHNfYXVkcyI6WyIwMDAwMDAwOS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiXSwiZGV2aWNlaWQiOiI1Yzk0OTE5Yy0wNTY2LTQyZDMtOGY0Ny05MmViY2UwNjYzNmYiLCJmYW1pbHlfbmFtZSI6Ik9yYmV5IiwiZ2l2ZW5fbmFtZSI6IkVyZW4iLCJpcGFkZHIiOiI3Ni4xOS4xNjguMTk1IiwibmFtZSI6IkVyZW4gT3JiZXkiLCJvaWQiOiIwNzAxMjIyYi1mM2ZmLTQ1NDctYmI4Yi1lYzQ3Y2FlNzBjNTciLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTI0NTI1MDk1LTcwODI1OTYzNy0xNTQzMTE5MDIxLTIwNzU3MDQiLCJwdWlkIjoiMTAwMzIwMDE5MkU1MjY0MiIsInJoIjoiMC5BUm9BdjRqNWN2R0dyMEdScXkxODBCSGJSd2tBQUFBQUFBQUF3QUFBQUFBQUFBQWFBUGMuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRzJGcGJlZ1NaTHd0R0JGbHlmQTlycHF3VzJvVkROSzd6c0pzQkVMOWxEdyIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoiZXJlbm9yYmV5QG1pY3Jvc29mdC5jb20iLCJ1cG4iOiJlcmVub3JiZXlAbWljcm9zb2Z0LmNvbSIsInV0aSI6InNrYl9vSnpYOVVtLU9IYVhhdW9pQWciLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl19.sE7z-R7_ro-Db5AH0cdNKrVty4Qf6krwVSECRsfzSzoFCdAFU-C_u4k7gImL7NQu9jmh21qRmh9XwCH9jiSwoFpACDNARjKQlesvVIgJtUifYN17oPsrf2_a8U9LiYgLsv60wl1UMeNPulEZWHP9TN3CnmHI7dM_vKEyQ1Q18_p8Qd4wPz66_QU4G9KN8rzjAiegHP-PYNHvSmn_hMSrjf8yiFqESABkr8hU1TZad6eOba8PZnloSQnrc2eTVs4VZuX8uD9vsViB-8-ppLv-2a-PF2k6CQJSvkvqlRa_vJhgv5qsAwAKxK2EKNcxwzRGKZBcXQjEYWHHU5irbxGodQ';

// Event listener for endpoint URL input change
document.getElementById('endpointUrl').addEventListener('input', function () {
    const endpointUrl = document.getElementById('endpointUrl').value;

    fetch(endpointUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`,
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const endpointStatus = data.defaultStatus !== undefined ? data.defaultStatus : data.status;
        document.getElementById('endpointStatus').innerText = `Endpoint Status: ${endpointStatus}`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('endpointStatus').innerText = `Endpoint Status: Error`;
    });
});


document.getElementById('mlForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const endpointUrl = document.getElementById('endpointUrl').value;

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