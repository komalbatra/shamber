//ATTEMPT AT CREATING TESTS...RAN INTO ISSUES WITH PACKAGE CONFLICTS.
//LEAVING IT HERE FOR FUTURE USE
// __________________________________________________________________
// /* eslint-disable no-unused-vars */
// var chai = require("chai");
// var chaiHttp = require("chai-http");
// var server = require("../server.js");
// var should = chai.should();

// chai.use(chaiHttp);

// describe("canary test", function() {
//   // A "canary" test is one we set up to always pass
//   // This can help us ensure our testing suite is set up correctly before writing real tests
//   it("should pass this canary test", function() {
//     expect(true).to.be.true;
//   });
// });

// it("should list ALL records on GET", function(done) {
//   chai
//     .request(server)
//     .get("/api/shames")
//     .end(function(err, res) {
//       res.should.have.status(200);
//       done();
//     });
// });

// describe("post to database test", function() {
//   it("should add a SINGLE record on POST", function(done) {
//     chai
//       .request(server)
//       .post("/api/shames")
//       .send({ name: "Test10", shame: "shames10" })
//       .end(function(err, res) {
//         res.should.have.status(200);
//         res.should.be.json;
//         res.body.should.be.a("object");
//         res.body.should.have.property("SUCCESS");
//         res.body.SUCCESS.should.be.a("object");
//         res.body.SUCCESS.should.have.property("name");
//         res.body.SUCCESS.should.have.property("shame");
//         done();
//       });
//   });
// });
