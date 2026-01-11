'use client';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Counter from '../inputs/Counter';
import SearchCalendar from '../inputs/SearchCalendar';

enum STEPS {
  NONE = 0,
  WHERE = 1,
  WHEN = 2,
  WHO = 3,
}

function Search() {
  const [step, setStep] = useState(STEPS.NONE);
  // Guest Counts
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const toggleStep = (value: STEPS) => {
    if (step === value) {
      setStep(STEPS.NONE);
    } else {
      setStep(value);
    }
  };

  return (
    <>
      {step !== STEPS.NONE && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setStep(STEPS.NONE)}
        />
      )}
      <div
        className={`border-[1px] w-full md:w-auto py-3 rounded-full shadow-sm hover:shadow-md transition cursor-pointer relative ${step !== STEPS.NONE ? "z-50 bg-white" : ""}`}
      >
        <div className="flex flex-row items-center justify-between">
          {/* WHERE */}
          <div
            onClick={() => toggleStep(STEPS.WHERE)}
            className={`text-sm font-semibold px-8 flex flex-col ${step === STEPS.WHERE ? "bg-gray-100/50 rounded-full" : ""}`}
            style={{ minHeight: '60px', justifyContent: 'center' }}
          >
            <div>Where</div>
            <div className="text-xs font-light text-gray-500">Search destinations</div>
          </div>

          {/* WHEN */}
          <div
            onClick={() => toggleStep(STEPS.WHEN)}
            className={`hidden sm:block text-sm font-semibold px-8 border-x-[1px] flex-1 text-center flex flex-col ${step === STEPS.WHEN ? "bg-gray-100/50 rounded-full border-none" : ""}`}
            style={{ minHeight: '60px', justifyContent: 'center' }}
          >
            <div>When</div>
            <div className="text-xs font-light text-gray-500">Add dates</div>
          </div>

          {/* WHO */}
          <div
            onClick={() => toggleStep(STEPS.WHO)}
            className={`text-sm pl-8 pr-3 text-gray-600 flex flex-row items-center gap-3 ${step === STEPS.WHO ? "bg-gray-100/50 rounded-full" : ""}`}
            style={{ minHeight: '60px' }}
          >
            <div className="hidden sm:block flex flex-col items-start">
              <div className="font-semibold text-black">Who</div>
              <div className="text-xs font-light text-gray-500">Add guests</div>
            </div>
            <div className={`p-3 bg-rose-500 rounded-full text-white flex flex-row items-center transition-all duration-300 ease-in-out`}>
              <BiSearch size={20} />
              <div
                className={`
                  text-sm 
                  font-semibold 
                  overflow-hidden 
                  transition-all 
                  duration-300 
                  ease-in-out
                  whitespace-nowrap
                  ${step !== STEPS.NONE ? 'max-w-[100px] opacity-100 pl-2 pr-2' : 'max-w-0 opacity-0 px-0'}
                `}
              >
                Search
              </div>
            </div>
          </div>
        </div>

        {/* DROPDOWNS */}

        {/* WHERE DROPDOWN */}
        {step === STEPS.WHERE && (
          <div className="absolute top-[100%] mt-2 left-1/2 -translate-x-1/2 w-[350px] bg-white rounded-3xl shadow-xl p-6 z-50 overflow-hidden border-[1px] cursor-default">
            <div className="font-semibold mb-2 ml-2">Suggested destinations</div>
            {['Kathmandu, Nepal', 'Pokhara, Nepal', 'Lalitpur, Nepal', 'Bhaktapur, Nepal'].map(place => (
              <div key={place} className="flex items-center gap-4 p-3 hover:bg-neutral-100 rounded-xl cursor-pointer transition">
                <div className="p-2 bg-neutral-100 rounded-lg">
                  <BiSearch size={18} />
                </div>
                <div className="text-sm">{place}</div>
              </div>
            ))}
          </div>
        )}

        {/* WHEN DROPDOWN */}
        {step === STEPS.WHEN && (
          <div className="absolute top-[100%] mt-2 left-1/2 -translate-x-1/2 w-[700px] z-50 cursor-default bg-white rounded-3xl shadow-xl p-6 border-[1px] overflow-hidden">
            <SearchCalendar />
          </div>
        )}

        {/* WHO DROPDOWN */}
        {step === STEPS.WHO && (
          <div className="absolute top-[100%] mt-2 left-1/2 -translate-x-1/2 w-[400px] bg-white rounded-3xl shadow-xl p-6 z-50 border-[1px] cursor-default flex flex-col gap-6">
            <Counter
              title="Adults"
              subtitle="Ages 13 or above"
              value={adults}
              onChange={(value) => setAdults(value)}
            />
            <hr />
            <Counter
              title="Children"
              subtitle="Ages 2 – 12"
              value={children}
              onChange={(value) => setChildren(value)}
            />
            <hr />
            <Counter
              title="Infants"
              subtitle="Under 2"
              value={infants}
              onChange={(value) => setInfants(value)}
            />
            <hr />
            <Counter
              title="Pets"
              subtitle="Bringing a service animal?"
              value={pets}
              onChange={(value) => setPets(value)}
            />
          </div>
        )}

      </div>
    </>
  );
}


export default Search;
