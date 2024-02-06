import { useAuthContext } from "shared/context/AuthContext/useAuthContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z.string().min(1, 'Informe o nome de usuario')
})

type IAuthenticateFormData = z.infer<typeof schema>;

export const useAuthenticate = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<IAuthenticateFormData>({
    resolver: zodResolver(schema)
  })

  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  const onHandleSubmit = handleSubmit((data) => {
    const response = signIn(data);

    if(response) {
      toast.success('Usuario logado com sucesso!')
      navigate('/dashboard')
      return;
    }

    toast.error('Ocorreu um erro!')
  });


  return {
    onHandleSubmit,
    errors,
    register
  }
}