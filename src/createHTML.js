const createTeam = (team) => {
    const generateManager = (manager) => {
        return`
    <div class="card mt-5">
        <div class="card-body border border-info  bg-success p-2" style="--bs-bg-opacity: .5">
        <h5 class="card-title font-weight-bold text-center bg-success p-2 text-white">${manager.getName()}</h5>
        <h6 class="card-subtitle text-center mb-2">Title: ${manager.getRole()} </h6>
        <p class="card-text text-center mb-2">Employee Id: ${manager.getId()}</p>
        <a href="mailto:${manager.getEmail()}" target="_blank" class="card-link text-start mb-2">${manager.getEmail()}</a>
        <p class="card-text text-start mb-2">Office Phone Number: ${manager.getOfficeNumber()}</p>
    </div>
</div>
    `;
    };
     // Generate Engineer Card
  const generateEngineer = (engineer) => {
    return `
<div class="card mt-5">
    <div class="card-body border border-primary">
        <h5 class="card-title font-weight-bold text-center">${engineer.getName()}</h5>
        <h6 class="card-subtitle text-center mb-2 text-muted">Title: ${engineer.getRole()}</h6>
        <p class="card-text text-center">Employee Id: ${engineer.getId()}</p>
        <a href="mailto:${engineer.getEmail()}" target="_blank" class="card-link">${engineer.getEmail()}</a><br>
        <a href="https://github.com/${engineer.github} target="_blank"">github Profile: ${engineer.github}</a>
    </div>
</div>
    `;
  };

    // Generate Intern Card
    const generateIntern = (intern) => {
      return `
  <div class="card mt-5">
      <div class="card-body border border-warning">
          <h5 class="card-title font-weight-bold text-center">${intern.getName()}</h5>
          <h6 class="card-subtitle text-center mb-2 text-muted">Title: ${intern.getRole()}</h6>
          <p class="card-text text-center">Employee Id: ${intern.getId()}</p>
          <a href="mailto:${intern.getEmail()}" target="_blank" class="card-link">${intern.getEmail()}</a>
          <p class="card-text">School: ${intern.getSchool()}</p>
      </div>
  </div>
      `;
    };
    //create individual cards
    const employeeCards = [];
    employeeCards.push(
      team
        .filter((employee) => employee.getRole() === "Manager")
        .map((manager) => generateManager(manager))
        .join("")
    );
    employeeCards.push(
      team
        .filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => generateEngineer(engineer))
        .join("")
    );
    employeeCards.push(
      team
        .filter((employee) => employee.getRole() === "Intern")
        .map((intern) => generateIntern(intern))
        .join("")
    );
    return employeeCards.join("");
  };

module.exports = (team) => {
//return HTML
return `

<!doctype html>
<html lang="en">

<head>

<!--meta tags-->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>

</html>

`;
};