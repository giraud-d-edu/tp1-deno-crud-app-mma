export const getNoteById = (id: number) => {
    if (!id) {
        throw new Error("Invalid note id");
    }
    return noteRepository.getNoteById(id);
}