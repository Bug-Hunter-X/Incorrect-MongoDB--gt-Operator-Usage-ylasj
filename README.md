# Incorrect MongoDB $gt Operator Usage

This repository demonstrates a common error in MongoDB queries involving the `$gt` operator. The example uses `$gt` (greater than) where `$gte` (greater than or equal to) is needed. This results in data being incorrectly excluded from the query results.

The `bug.js` file contains the faulty query, while `bugSolution.js` provides the corrected version.  The issue is highlighted in the comments within the code.