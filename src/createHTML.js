const createTeam = (team) => {
    const generateManager = (manager) => {
        return`
    <div class="card">
        <div class="card-header">
            <div class="card-header-title">
                ${manager.getName()}
            </div>
            <div class="card-content">
            ${manager.getRole()}
            ${manager.getId()}
            <a href="mailto:${manager.getEmail}>${manager.getEmail}</a>
            ${manager.getOfficeNumber}
            </div>
        </div>
    </div>
    `;
    };



};

//return HTML
return `

<!doctype html>
<html lang="en">

<head>

<!--meta tags-->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bulma UI -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

<title> My Team Profile </title>

</head>

<body>
<div class="navbar navbar-dark bg-danger>
    <h1> My team profile! </h1>
</div>
<div class="container">
    <div class="columns">
        ${createTeam(team)}
    </div>
</div>

</body>
</html>

`;