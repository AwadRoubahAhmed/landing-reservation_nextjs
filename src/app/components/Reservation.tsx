"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Check } from "lucide-react";

const PRICE_PER_NIGTH = 120;

export default function Reservation() {
  // States;
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  //const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  // Comportements;
  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date);
    if (endDate && date && date > endDate) {
      setEndDate(undefined);
    }
  };

  const handleEndDateChange = (date: Date | undefined) => {
    if (startDate && date && date >= startDate) {
      setEndDate(date);
    }
  };

  const calculateNights = () => {
    if (startDate && endDate) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    return 0;
  };

  const totaNights = calculateNights();
  const totalPrice = totaNights * PRICE_PER_NIGTH;

  const handleSubmit = () => {
    setIsSubmited(true);
    //... handle form submission
  };
  return (
    <div className="max-w-[1200px] p-6 bg-slate-100 shadow-xl rounded-xl space-y-6 mx-auto mt-8">
      <h2 className="text-3xl text-center font-bold text-gray-800">
        Reserver votre Séjour
      </h2>
      <div className="space-y-4">
        <div className="flex justify-center items-center space-x-3">
          <CalendarDays className="w-6 h-6 text-gray-800" />
          <p className="font-medium text-lg text-gray-700">
            Sélectionner vos dates
          </p>
        </div>
        <div className="max-w-xl mx-auto grid grid-cols-1 space-y-8 md:grid-cols-2 md:space-y-0 gab-8">
          <div className="mx-auto">
            <p className="font-medium-text-sm text-gray-700">Date de début</p>
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={handleStartDateChange}
              className="rounded-md border shadow-md mt-2"
            />
          </div>
          {startDate && (
            <div className="mx-auto">
              <p className="font-medium-text-sm text-gray-700">Date de fin</p>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={handleEndDateChange}
                className="rounded-md border shadow-md mt-2"
              />
            </div>
          )}
        </div>
      </div>
      {totaNights > 0 && (
        <div className="bg-yellow-200 border-l-4 border-yellow-500 p-4 text-blue-700 rounded-lg">
          <p className="font-semibold text-lg text-gray-700">
            {` Nombre de nuits : ${totaNights}`}
          </p>
          <p className="font-medium text-lg text-gray-700">
            {`Prix total : ${totalPrice}£`}
          </p>
        </div>
      )}
      <Button
        onClick={handleSubmit}
        disabled={!startDate || !endDate || isSubmited}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-md py-3 rounded-lg"
      >
        {isSubmited ? (
          <div className="flex justify-center items-center space-x-2">
            <CalendarDays className="w-6 h-6 text-green-400" />
            <span flex>
              Réservation confirmée <Check className="text-green-700" />
            </span>
          </div>
        ) : (
          "Réserver"
        )}
      </Button>

      {isSubmited && (
        <p className="mt-4 text-center text-gray-700">
          Votre réservation a bien été prise en compte. Vous allez recevoir un
          email de confirmation.
        </p>
      )}
    </div>
  );
}
