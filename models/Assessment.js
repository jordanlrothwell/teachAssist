const mongoose = require("mongoose");

// Milestone schema to handle both drafts and final submissions
// By default:
// - an assessment has 2x milestones
// - the 1st milestone has 'draft: true', the 2nd has 'draft: false'
// Default behaviour is handled by the appropriate route(s)
const mileStoneSchema = new mongoose.Schema({
  milestone: {
    draft: Boolean, // Indicates whether the milestone is for a draft
    due: Date,
    submitted: Date, // Takes a date if submitted, falsy otherwise
    // TODO: Add middleware to handle grading logic/draft quality
    grade: String, // Validated on the front end
    email: Date, // Logic handled by middleware (i.e. whether/what kind of email required)
  },
});

const assessmentSchema = new mongoose.Schema({
  assessmentName: String,
  milestones: [mileStoneSchema],
});

module.exports = assessmentSchema;
