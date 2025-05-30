import Form from "../components/Form";

export default function FormSection({ register, handleSubmit, errors, onSubmit, handleReset}) {
  return (
    <div className="px-6 py-8">
      <div className="md:flex justify-between items-center space-y-2">
        <h2 className="text-2xl font-bold leading-[1.25]">
          Mortgage Calculator
        </h2>
        <button type="button" onClick={handleReset}>
          <u>Clear All</u>
        </button>
      </div>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit} 
      />
    </div>
  );
}
