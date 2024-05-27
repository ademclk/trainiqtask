import axios from 'axios';
import { ApiResponse, DashboardData } from '../types/types';

const API_URL = 'https://demotrainiq.com/case/dashboard';

export const fetchDashboardData = async (): Promise<DashboardData> => {
    try {
        const response = await axios.get<ApiResponse>(API_URL);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        throw error;
    }
};  
