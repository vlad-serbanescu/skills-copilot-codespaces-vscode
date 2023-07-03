function skillsMember() {
    var member = {
        name: "John",
        age: 25,
        skills: ["JavaScript", "CSS", "HTML"]
    };
    console.log(member.name + " has " + member.skills.length + " skills: " + member.skills.join(", "));
}