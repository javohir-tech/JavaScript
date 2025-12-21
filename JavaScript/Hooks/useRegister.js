import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import axios from 'axios';
import { useUserStore } from '@/Stores/useUserStore';

export function useRegister() {
    const router = useRouter();
    const userStore = useUserStore();
    const loading = ref(false);

    const formState = reactive({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'customer',
        userrate: 'yearly',
        remember: false,
    });

    const validateConfirmPassword = async (_, value) => {
        if (value !== formState.password) {
            throw new Error('Passwords do not match!');
        }
    };

    watch(
        () => formState.password,
        () => {
            if (formState.confirmPassword) {
                validateConfirmPassword(null, formState.confirmPassword).catch(() => { });
            }
        }
    );

    const onFinish = async () => {
        loading.value = true;
        try {
            const payload = {
                name: formState.name,
                email: formState.email,
                password: formState.password,
                role: formState.role,
                userrate: formState.userrate,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            const response = await axios.post(
                `${import.meta.env.VITE_APP_API}/user-register`,
                payload
            );

            const { token, userData } = response.data;

            if (formState.remember) {
                localStorage.setItem('token', token);
            } else {
                sessionStorage.setItem('token', token);
            }

            userStore.setUser({
                name: userData.name,
                email: userData.email,
                id: userData.id,
                token,
            });

            message.success(`Success: ${response.data.message || 'Registered successfully!'}`);

            router.push('/').then(() => window.location.reload());

            resetForm();
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            message.error(error?.message || 'Ro‘yxatdan o‘tishda xatolik yuz berdi');
        } finally {
            loading.value = false;
        }
    };

    const regiterWithGoogle = () => {
        console.log(1)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Form validation failed:', errorInfo);
    };

    const resetForm = () => {
        formState.name = '';
        formState.email = '';
        formState.password = '';
        formState.confirmPassword = '';
        formState.remember = false;
    };

    return {
        formState,
        loading,
        onFinish,
        onFinishFailed,
        validateConfirmPassword,
        regiterWithGoogle
    };
}
