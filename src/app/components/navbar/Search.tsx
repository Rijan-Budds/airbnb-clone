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
          className="fixed inset-0 bg-transparent z-10"
          onClick={() => setStep(STEPS.NONE)}
        />
      )}

      <div
        className={`flex flex-row items-center border border-gray-300 rounded-full shadow-sm hover:shadow-md transition relative z-20 ${step !== STEPS.NONE ? "bg-neutral-100" : "bg-white"}`}
        style={{ height: '66px' }}
      >
        {/* Sliding Active Pill */}
        {step !== STEPS.NONE && (
          <div
            className="absolute top-0 bottom-0 bg-white rounded-full shadow-md z-10 transition-all duration-300 ease-in-out"
            style={{
              left: step === STEPS.WHERE ? '0' : step === STEPS.WHEN ? '261px' : '502px',
              width: step === STEPS.WHERE ? '260px' : step === STEPS.WHEN ? '240px' : '260px',
            }}
          />
        )}

        {/* WHERE */}
        <div
          onClick={() => toggleStep(STEPS.WHERE)}
          className={`relative z-20 flex flex-col justify-center px-8 py-3 cursor-pointer rounded-full transition ${step !== STEPS.NONE ? "hover:bg-white/50" : "hover:bg-gray-100"} ${step === STEPS.WHERE ? "" : "bg-transparent"}`}
          style={{ minWidth: '260px' }}
        >
          <div className="text-xs font-semibold mb-0.5">Where</div>
          <input
            type="text"
            placeholder="Search destinations"
            className="text-sm text-gray-500 bg-transparent border-none outline-none w-full placeholder-gray-400 cursor-pointer"
            readOnly
          />
        </div>

        {/* Separator */}
        <div className={`relative z-20 h-10 w-px bg-gray-300 ${step !== STEPS.NONE ? "hidden" : "block"}`}></div>

        {/* WHEN */}
        <div
          onClick={() => toggleStep(STEPS.WHEN)}
          className={`relative z-20 hidden sm:flex flex-col justify-center px-8 py-3 cursor-pointer rounded-full transition ${step !== STEPS.NONE ? "hover:bg-white/50" : "hover:bg-gray-100"} ${step === STEPS.WHEN ? "" : "bg-transparent"}`}
          style={{ minWidth: '240px' }}
        >
          <div className="text-xs font-semibold mb-0.5">When</div>
          <div className="text-sm text-gray-400">Add dates</div>
        </div>

        {/* Separator */}
        <div className={`relative z-20 hidden sm:block h-10 w-px bg-gray-300 ${step !== STEPS.NONE ? "hidden" : "block"}`}></div>

        {/* WHO */}
        <div
          onClick={() => toggleStep(STEPS.WHO)}
          className={`relative z-20 flex flex-row items-center px-6 py-3 cursor-pointer rounded-full transition gap-4 ${step !== STEPS.NONE ? "hover:bg-white/50" : "hover:bg-gray-100"} ${step === STEPS.WHO ? "" : "bg-transparent"}`}
          style={{ minWidth: '260px' }}
        >
          <div className="flex flex-col justify-center flex-1">
            <div className="text-xs font-semibold mb-0.5">Who</div>
            <div className="text-sm text-gray-400">Add guests</div>
          </div>
          <div className={`bg-rose-500 rounded-full p-3 text-white hover:bg-rose-600 transition flex flex-row items-center justify-center shadow-md`}>
            <BiSearch size={18} />
            <div
              className={`
                  text-sm 
                  font-bold 
                  overflow-hidden 
                  transition-all 
                  duration-300 
                  ease-in-out
                  whitespace-nowrap
                  ${step !== STEPS.NONE ? 'max-w-[100px] opacity-100 pl-2 pr-1' : 'max-w-0 opacity-0 px-0'}
                `}
            >
              Search
            </div>
          </div>
        </div>

        {/* DROPDOWNS */}
        {/* WHERE DROPDOWN */}
        {step === STEPS.WHERE && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-3xl shadow-xl p-8 z-30" style={{ width: '500px' }}>
            <h3 className="text-sm font-semibold mb-4">Suggested destinations</h3>
            <div className="space-y-3">
              {['Kathmandu, Nepal', 'Pokhara, Nepal', 'Lalitpur, Nepal', 'Bhaktapur, Nepal'].map(place => (
                <div key={place} className="flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition">
                  <div className="bg-gray-200 rounded-lg p-3">
                    <BiSearch size={20} />
                  </div>
                  <div className="text-sm">{place}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHEN DROPDOWN */}
        {step === STEPS.WHEN && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-3xl shadow-xl p-8 z-30 w-[850px] overflow-hidden border border-neutral-100">
            <SearchCalendar />
          </div>
        )}

        {/* WHO DROPDOWN */}
        {step === STEPS.WHO && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-3xl shadow-xl p-8 z-30" style={{ width: '400px' }}>
            <div className="space-y-6">
              <Counter
                title="Adults"
                subtitle="Ages 13 or above"
                value={adults}
                onChange={(value) => setAdults(value)}
              />
              <Counter
                title="Children"
                subtitle="Ages 2-12"
                value={children}
                onChange={(value) => setChildren(value)}
              />
              <Counter
                title="Infants"
                subtitle="Under 2"
                value={infants}
                onChange={(value) => setInfants(value)}
              />
              <Counter
                title="Pets"
                subtitle="Bringing a service animal?"
                value={pets}
                onChange={(value) => setPets(value)}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;