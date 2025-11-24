import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-96">
            <div className="w-16 h-16 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;