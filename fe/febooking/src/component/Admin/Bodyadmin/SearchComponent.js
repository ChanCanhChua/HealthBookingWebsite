import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;


const SearchCompenent = ({ onSearch, placeholder }) => {
        const [searchValue, setSearchValue] = useState('');
        let searchTimeout; // Định nghĩa biến bên ngoài

        const handleSearchChange = (value) => {
            setSearchValue(value);
            
            // Hủy timeout trước đó nếu có
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            
            // Tạo timeout mới
            searchTimeout = setTimeout(() => {
                onSearch(value); // Gọi hàm tìm kiếm
            }, 300); // Độ trễ 300ms
        };
    return (
        <>            
            <Search
                style={{height: "50px"}}
                placeholder={placeholder} 
                onSearch={onSearch} 
                enterButton 
                onChange={(e) => handleSearchChange(e.target.value)} // Gọi hàm xử lý thay đổi
            />
        </>
    );
}
export default SearchCompenent;
