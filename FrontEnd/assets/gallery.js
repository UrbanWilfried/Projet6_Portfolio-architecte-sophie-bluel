const createGallery = ({ works = [], isEditable = false, onDeleteWork }) => {
  const galleryElement = document.createElement("div");
  let galleryWorks = [...works];

  const setGallery = (newWorks) => {
    galleryWorks = [...newWorks];
    renderGallery();
  };

  const renderGallery = () => {
    galleryElement.innerHTML = "";

    galleryWorks.forEach((work) => {
      const figure = document.createElement("figure");
      figure.innerHTML = `
        <img alt="${work.title}" src="${work.imageUrl}"/>
        <figcaption>${work.title}</figcaption>
        <p class="editNone">éditer</p>
      `;

      if (isEditable) {
        const deleteButton = document.createElement("i");
        deleteButton.classList.add("delete-work");
        deleteButton.classList.add("fa-solid");
        deleteButton.classList.add("fa-trash-can");

        deleteButton.addEventListener("click", (e) => {
          e.preventDefault();
          removeWork(work.id);
        });
        figure.appendChild(deleteButton);
      }

      galleryElement.appendChild(figure);
    });

    return galleryElement;
  };

  const removeWork = (workId) => {
    onDeleteWork(workId);
  };
  
  return {
    setGallery,
    renderGallery,
  };
};
  
export default createGallery;