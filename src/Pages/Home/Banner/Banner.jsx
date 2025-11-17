import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import React from 'react';

export const Banner = () => {
  return (
    <div className="bg-gray-400">
      <div className="flex justify-center items-center py-44  ">
        <div className=" mx-auto">
          <div className='text-center '>
            <h1 className="text-[5rem] text-white font-bold">TTM Konnect</h1>
            <h1 className="text-[2rem] text-white   font-bold">
              Total Transportation Management konnect
            </h1>
          </div>

          <div className="bg-white rounded-xl flex justify-between px-2 py-9 my-3 w-[400px] mx-auto">
            <h1 className="text-[2rem] pl-3">jsahduashdsjka</h1>
            <Button
              className="bg-blue-600 hover:b-blue-700 text-white rounded-full px-6"
              size="pill">
              Encrypt
            </Button>
          </div>
          <div className="flex  justify-center items-center gap-3 mx-auto">
            <Button variant="outline" className="hover:bg-gray-100">
              Contact Us
              <ArrowRight />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Play />
              TTM4U
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
