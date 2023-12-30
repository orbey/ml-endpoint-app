 // Replace 'YOUR_BEARER_TOKEN' with the actual Bearer token value
 const bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3LyIsImlhdCI6MTcwMzk1NTgyNywibmJmIjoxNzAzOTU1ODI3LCJleHAiOjE3MDM5NjA2NTAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWVFBZS84VkFBQUE2VXg1SllVZ2NaVjg1My82UWlDUFRGbGJPSkoxWXJwRHA3aWl5S3crbmtKeUppWi9qMGowUGJwdURtd3drY1pwTjNyNDl1UEJFcW4vbERtNVI3eFlEejVxNGtRWkx5QlJ3QmRwdDc3d0xsZGhXWmx6N1BVbWZFTUt6Y2hUWHYxeFdpMGNqVmxtdnYxREhSQTFvclFwUEZnN3pHQVAzV3MyN05IdzJ6aUtzanM9IiwiYW1yIjpbInJzYSIsIm1mYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImNvbnRyb2xzIjpbImFwcF9yZXMiXSwiY29udHJvbHNfYXVkcyI6WyIwMDAwMDAwOS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiXSwiZGV2aWNlaWQiOiI1Yzk0OTE5Yy0wNTY2LTQyZDMtOGY0Ny05MmViY2UwNjYzNmYiLCJmYW1pbHlfbmFtZSI6Ik9yYmV5IiwiZ2l2ZW5fbmFtZSI6IkVyZW4iLCJpcGFkZHIiOiI3Ni4xMTkuMTgzLjExNCIsIm5hbWUiOiJFcmVuIE9yYmV5Iiwib2lkIjoiMDcwMTIyMmItZjNmZi00NTQ3LWJiOGItZWM0N2NhZTcwYzU3Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEyNDUyNTA5NS03MDgyNTk2MzctMTU0MzExOTAyMS0yMDc1NzA0IiwicHVpZCI6IjEwMDMyMDAxOTJFNTI2NDIiLCJyaCI6IjAuQVJvQXY0ajVjdkdHcjBHUnF5MTgwQkhiUndrQUFBQUFBQUFBd0FBQUFBQUFBQUFhQVBjLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJkdmNfbW5nZCIsImR2Y19jbXAiLCJrbXNpIl0sInN1YiI6IkcyRnBiZWdTWkx3dEdCRmx5ZkE5cnBxd1cyb1ZETks3enNKc0JFTDlsRHciLCJ0aWQiOiI3MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDciLCJ1bmlxdWVfbmFtZSI6ImVyZW5vcmJleUBtaWNyb3NvZnQuY29tIiwidXBuIjoiZXJlbm9yYmV5QG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJfWEFaUmdoZjFVR2x4RXFxalN6ZEFRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2NjIjpbIkNQMSJdfQ.cAvuQ7SYqfSLgfn961sP2VFDloZ2Ss6xiOC6qBBrghsL5wKxOzS0xNKYHjOeAtdR4Fi6S26hbJqB_WTeZ_NwSeK1a5o-Z-2dENckhAB6law9_8rCFjqqLJzkHzBsFgsHjreQaDK-O7G6vHp1RK5FPi8lpyMQA3fyDfoLriK0yRRJThG15vtHnxYF7G6_kchoDUXotIqV_QNmRxZF9e4Br8HQ1c9yyLb3TLz2WcuIx-X2XNYP1e0X0AoalnYL-oCHRmeeq7L2lUxvaA7qc3mDodukMMlG--azwSElWKU4nkSlzQV_zzhvEOR_94DYdfjDnAFnavKVj_vEuefw4YoqBw'

// Event listener for endpoint URL input change
document.getElementById('endpointUrl').addEventListener('input', function () {
    // Clear existing input fields
    document.getElementById('keyValuePairs').innerHTML = '';

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
        console.log(data)
        const endpointStatus = data.defaultStatus !== undefined ? data.defaultStatus : data.status;
        document.getElementById('endpointStatus').innerText = `Endpoint Status: ${endpointStatus}`;

        // Handle input signature and create input fields
        const inputSignature = data.defaultVersionInfo?.inputSignature || data.inputSignature;

        if (inputSignature) {
            createInputFields(JSON.parse(inputSignature));
        }
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
    // keyValuePairs.forEach(pair => {
    //     const key = pair.querySelector('input:nth-child(1)').value;
    //     const value = pair.querySelector('input:nth-child(2)').value;
    
    //     // Check if the value is numeric and parse it accordingly
    //     individualData[key] = !isNaN(value) ? parseFloat(value) : value;
    // });

    // keyValuePairs.forEach(pair => {
    //     const label = pair.querySelector('.input-group-prepend span').textContent;
    //     const value = pair.querySelector('.form-control').value;

    //     // Check if the value is numeric and parse it accordingly
    //     individualData[label] = !isNaN(value) ? parseFloat(value) : value;
    // });

    keyValuePairs.forEach(pair => {
        // Check if it's a dynamically generated field
        const isDynamicField = pair.querySelector('.input-group-prepend span') !== null;

        if (isDynamicField) {
            const label = pair.querySelector('.input-group-prepend span').textContent;
            const value = pair.querySelector('.form-control').value;
            individualData[label] = !isNaN(value) ? parseFloat(value) : value;
        } else {
            // It's a manually added field
            const key = pair.querySelector('.form-control:nth-child(1)').value;
            const value = pair.querySelector('.form-control:nth-child(2)').value;
            individualData[key] = !isNaN(value) ? parseFloat(value) : value;
        }
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

// Function to create input fields based on the input signature
function createInputFields(signature) {
    const keyValuePairs = document.getElementById('keyValuePairs');
    
    signature.forEach(field => {
        const newKeyValuePair = document.createElement('div');
        newKeyValuePair.classList.add('input-group', 'mb-3');
        // Modify the input creation to include type-based validation
        newKeyValuePair.innerHTML = `
            <div class="input-group-prepend">
                <span class="input-group-text">${field.name} (${field.type})</span>
            </div>
            <input type="${field.type === 'double' ? 'number' : 'text'}" class="form-control" placeholder="${field.name}">
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
}

// Event listener for adding key/value pairs
// document.getElementById('addKeyValuePairBtn').addEventListener('click', function () {
//     const keyValuePairs = document.getElementById('keyValuePairs');
//     const newKeyValuePair = document.createElement('div');
//     newKeyValuePair.classList.add('input-group', 'mb-3');
//     newKeyValuePair.innerHTML = `
//         <input type="text" class="form-control" placeholder="Key">
//         <input type="text" class="form-control" placeholder="Value">
//         <div class="input-group-append">
//             <button class="btn btn-outline-secondary remove-key-value-btn" type="button">Remove</button>
//         </div>
//     `;
//     keyValuePairs.appendChild(newKeyValuePair);

//     // Add event listener to remove key/value pair
//     newKeyValuePair.querySelector('.remove-key-value-btn').addEventListener('click', function () {
//         newKeyValuePair.remove();
//     });
// });

// Event listener for adding key/value pairs
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