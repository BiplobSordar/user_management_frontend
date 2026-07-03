import Button from "../common/Button";
import Modal from "../common/Modal";

const DeleteModal = ({
  open,
  onClose,
  onConfirm,
  loading,
  user,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Delete User"
    >
      <p className="text-slate-600">
        Are you sure you want to delete{" "}
        <span className="font-semibold">
          {user?.firstName} {user?.lastName}
        </span>
        ?
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          loading={loading}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;