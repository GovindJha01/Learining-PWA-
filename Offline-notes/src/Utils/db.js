import { openDB } from "idb";

export const dbPromise = openDB("offline-notes", 1, {
  upgrade(db) {
    db.createObjectStore("notes", { keyPath: "id", autoIncrement: true });
  },
});

export const addNote = async (note) => {
  const db = await dbPromise;
  await db.add("notes", note);
};

export const getAllNotes = async () => {
  const db = await dbPromise;
  return await db.getAll("notes");
};
