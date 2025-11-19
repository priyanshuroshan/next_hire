import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '../../utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '../../redux/companySlice';

const CreateCompany = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [companyName, setCompanyName] = useState("");

    const registerNewCompany = async () => {
        if (!companyName.trim()) {
            return toast.error("Company name cannot be empty");
        }

        try {
            const res = await axios.post(
                `https://next-hire-vtar.onrender.com/api/v1/company/register`,
                { companyName },
                { headers: { "Content-Type": "application/json" }, withCredentials: true }
            );

            if (res.data.success) {
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);

                const companyId = res.data.company._id;
                navigate(`/admin/companies/${companyId}`);
            }

        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <div className="my-10">
                    <h1 className="text-2xl font-bold">Your Company Creation Page</h1>
                    <p className="text-gray-500">Give your company a name — you can edit it later.</p>
                </div>

                <Label>Company Name</Label>
                <Input
                    type="text"
                    placeholder="Microsoft Inc, Google LLC, etc"
                    className="my-2"
                    onChange={e => setCompanyName(e.target.value)}
                />

                <div className="flex items-center gap-2 my-10">
                    <Button className="bg-[#7209b7]" onClick={registerNewCompany}>
                        Create Company
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/admin/companies")}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateCompany;
