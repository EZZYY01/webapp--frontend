import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

// Confirmation modal component
function ConfirmationModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-lg font-semibold mb-4">Are you sure you want to delete this product?</h3>
        <div className="flex justify-end space-x-4">
          <Button onClick={onCancel} className="bg-gray-400">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-red-600">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleDeleteClick = (productId) => {
    setProductToDelete(productId);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      handleDelete(productToDelete);
    }
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
        </div>
        <CardContent>
          <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
          <div className="flex justify-between items-center mb-2">
            <span
              className={`${product?.salePrice > 0 ? "line-through" : ""
                } text-lg font-semibold text-primary`}
            >
              NRS.{product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-bold">NRS.{product?.salePrice}</span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
          >
            Edit
          </Button>
          <Button onClick={() => handleDeleteClick(product?._id)}>Delete</Button>
        </CardFooter>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </Card>
  );
}

export default AdminProductTile;
