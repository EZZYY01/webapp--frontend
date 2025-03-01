import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../ui/use-toast";

function RentFormDialog({ open, setOpen, productDetails }) {
    const [rentalStartDate, setRentalStartDate] = useState("");
    const [rentalEndDate, setRentalEndDate] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userLocation, setUserLocation] = useState("");
    const { toast } = useToast();

    const handleSubmit = () => {
        // Show a success toast without calling the backend
        toast({
            title: "Product rented successfully!",
        });

        // Close the dialog
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={() => setOpen(false)}>
            <DialogContent>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Rent Product</h2>
                    <Label>Phone Number</Label>
                    <Input
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        placeholder="Enter phone number"
                    />
                    <Label>Location</Label>
                    <Input
                        value={userLocation}
                        onChange={(e) => setUserLocation(e.target.value)}
                        placeholder="Enter your location"
                    />
                    <Label>Rental Start Date</Label>
                    <Input
                        type="date"
                        value={rentalStartDate}
                        onChange={(e) => setRentalStartDate(e.target.value)}
                    />
                    <Label>Rental End Date</Label>
                    <Input
                        type="date"
                        value={rentalEndDate}
                        onChange={(e) => setRentalEndDate(e.target.value)}
                    />
                    <Button onClick={handleSubmit}>Submit Rental</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default RentFormDialog;
