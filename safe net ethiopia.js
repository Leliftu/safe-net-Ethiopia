// ---------------- CHART ----------------
const ctx = document.getElementById("chart");

if (ctx) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Harassment", "Verbal Abuse", "Psychological Impact", "Reporting"],
      datasets: [{
        label: "Percentage",
        data: [58, 62, 70, 20],
        backgroundColor: ["#2563eb","#10b981","#f59e0b","#ef4444"]
      }]
    }
  });
}

// ---------------- BUTTONS ----------------
function showInfo(type){
  let text = "";

  if(type === "harassment"){
    text = "Harassment includes repeated harmful actions like insults, threats, or unwanted messages online.";
  }

  if(type === "report"){
    text = "Report incidents to trusted authorities, teachers, or safe online platforms.";
  }

  if(type === "help"){
    text = "Seek help from trusted people, counselors, or support organizations.";
  }

  document.getElementById("infoBox").innerText = text;
}

// ---------------- REPORT SYSTEM ----------------
function submitReport(){
  let name = document.getElementById("name").value || "Anonymous";
  let msg = document.getElementById("msg").value;

  let data = JSON.parse(localStorage.getItem("reports")) || [];

  data.push({name,msg});

  localStorage.setItem("reports", JSON.stringify(data));

  document.getElementById("status").innerText = "Report saved!";
}

// ---------------- ADMIN LOAD ----------------
function loadReports(){
  let list = document.getElementById("reports");
  if(!list) return;

  let data = JSON.parse(localStorage.getItem("reports")) || [];

  data.forEach(r=>{
    let li = document.createElement("li");
    li.innerText = r.name + ": " + r.msg;
    list.appendChild(li);
  });
}

loadReports();

// ---------------- LOGIN (simple demo) ----------------
function login(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if(email && pass){
    window.location.href = "admin.html";
  } else {
    document.getElementById("msg").innerText = "Invalid login";
  }
}
