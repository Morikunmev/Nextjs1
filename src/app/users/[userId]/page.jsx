"use client";
function UserPage({ params }) {
  console.log(params);
  return (
    <div>
      <button
        onClick={() => {
          console.log("Hola, soy Richard Rocuant");
          console.log("ID del usuario:", params.userId);
          console.log("Parámetros:", params.id);

          // Aquí podrías redirigir a otra página si lo deseas
          // ro
        }}
      >
        Click
      </button>
    </div>
  );
}

export default UserPage;
