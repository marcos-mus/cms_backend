import db from "../config/db.js";

export const getProjects =  (req, res) => {
  const sql = "SELECT * FROM projects ORDER BY id DESC";

   db.query(sql, (err, results) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(200).json(results);
  });
};

export const getProject =  (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM projects WHERE id=? LIMIT 1";

   db.query(sql, id, (err, result) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(200).json(result);
  });
};

export const createProject =  (req, res) => {
  const project = req.body;
  const sql = "INSERT INTO projects SET ?";

   db.query(sql, project, (err, result) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(201).json(result);
  });
};

export const deleteProject =  (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM projects WHERE id=?";

   db.query(sql, id, (err, result) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(200).json(result);
  });
};

export const updateProject =  (req, res) => {
  const id = req.params.id;
  const updatedProject = req.body;
  const sql = "UPDATE projects SET ? WHERE id=?";

   db.query(sql, [updatedProject, id], (err, result) => {
    if (err) res.status(404).json({ message: err.message });
    res.status(200).json(result);
  });
};
