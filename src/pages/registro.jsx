import {useState, useContext} from "react";
import {Transition} from "@headlessui/react";

import Button from "@/components/Button";
import Layout from "@/components/HomeLayout";
import {UserContext} from "../../context/userContext";
import {BsPeopleFill, BsPersonFill} from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";

function FormStep({currentFormStep, formStep, children, transition = 'opacity'}) {
  return transition === 'opacity' ? (
    <Transition appear={true} className='absolute w-full h-full flex flex-col justify-center items-center text-center px-4' show={currentFormStep === formStep}
                enter='absolute transition-opacity duration-500 delay-150' leave='transition-opacity duration-500 relative delay-100'
                enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
      {children}
    </Transition>
  ) : (
    <Transition appear={true} className='absolute w-full h-full flex flex-col justify-center items-center text-center px-4' show={currentFormStep === formStep}
                enter='absolute transition duration-500 transform delay-100' leave='transition-opacity duration-500 relative delay-100'
                enterFrom='translate-x-full' enterTo='translate-x-0' leaveFrom='opacity-100' leaveTo='opacity-0'>
      {children}
    </Transition>
  )
}

function FormQuotes({formStep, userType}) {
  return userType === 'abogado' ? (
    <>
      <FormStep currentFormStep={1} formStep={formStep}>
        <p className='text-5xl font-lexend'>Ayuda a tus clientes  o no sé xd</p>
      </FormStep>
    </>
  ) : (
    <>
      <FormStep transition='transform' currentFormStep={1} formStep={formStep}>
        <p className='text-5xl font-lexend'>Descarga la aplicación o no sé xd</p>
      </FormStep>
    </>
  )
}

function Form({formStep, userType, nextFormStep, prevFormStep}) {

  const [checkedButton, setCheckedButton] = useState('');

  return userType === 'abogado' ? (
    <>
      <FormStep transition='transform' currentFormStep={1} formStep={formStep}>
        <p className='text-2xl font-lexend text-slate-900'>¿Cómo deseas registrarte?</p>
        <div className='pt-10 flex w-96 justify-around'>
          <button onClick={() => setCheckedButton('leftButton')} className={`${checkedButton === 'leftButton' ? 'bg-sky-900 ' : 'border-[3px] bg-slate-200 border-sky-900 hover:bg-slate-50'} w-32 h-32 py-4 rounded-md flex flex-col items-center justify-around transition-colors duration-300`}>
            <BsPersonFill color={checkedButton === 'leftButton' ? '#F8FAFC' : '#0C4A6E'}/>
            <p className={`${checkedButton === 'leftButton' ? 'text-slate-50' : 'text-sky-900'} text-base`}>Abogado</p>
          </button>
          <button onClick={() => setCheckedButton('rightButton')} className={`${checkedButton === 'rightButton' ? 'bg-sky-900 ' : 'border-[3px] bg-slate-200 border-sky-900 hover:bg-slate-50'} w-32 h-32 py-4 rounded-md flex flex-col items-center justify-around transition-colors duration-300`}>
            <BsPeopleFill color={checkedButton === 'rightButton' ? '#F8FAFC' : '#0C4A6E'}/>
            <p className={`${checkedButton === 'rightButton' ? 'text-slate-50' : 'text-sky-900'} text-base`}>Despacho</p>
          </button>
        </div>
      </FormStep>
      <FormStep transition='transform' currentFormStep={2} formStep={formStep}>
        {/*Antes de poder empezar con este debo recrear un required con los botones de arriba, complica pero podría ser un if (checkedButton && step === 1) botones de color y con funcion, sino botones grises sin funcion*/}
        <p className='text-2xl font-lexend'>Habla</p>
      </FormStep>
      <Transition className='absolute top-72 left-40 flex justify-around' show={formStep > 0} enter='transition-opacity duration-500 delay-100' leave='transition-opacity duration-300' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
        <button className='text-lg flex items-center after:absolute after:top-9 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-slate-900 after:scale-x-0 after:transition-all hover:after:scale-x-100' onClick={prevFormStep}><BiArrowBack size={22}/><p className='pl-2 text-lg text-slate-900'>Regresar</p></button>
      </Transition>
      <Transition className='absolute bottom-60 w-full px-4 flex justify-center' show={formStep > 0} enter='transition-opacity duration-500 delay-100' leave='transition-opacity duration-300' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
        <Button variant='outline' size='medium' className='w-52 ml-28' onClick={nextFormStep} color='slate'>Siguiente</Button>
      </Transition>
    </>
  ) : (<>
      <FormStep currentFormStep={1} formStep={formStep}>
        <p className='text-2xl font-lexend'>Cuéntanos de ti</p>
      </FormStep>
      <Transition className='absolute top-72 left-40 flex justify-around' show={formStep > 0} enter='transition-opacity duration-500 delay-100' leave='transition-opacity duration-300' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
        <button className='text-lg flex items-center after:absolute after:top-9 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-slate-900 after:scale-x-0 after:transition-all hover:after:scale-x-100' onClick={prevFormStep}><BiArrowBack size={22}/><p className='pl-2 text-lg text-slate-900'>Regresar</p></button>
      </Transition>
      <Transition className='absolute bottom-60 w-full px-4 flex justify-center' show={formStep > 0} enter='transition-opacity duration-500 delay-100' leave='transition-opacity duration-300' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
        <Button variant='outline' size='medium' className='w-52 ml-28' onClick={nextFormStep} color='slate'>Siguiente</Button>
      </Transition>
    </>
  )
}


export default function Registro() {

  const {userType, setUserType} = useContext(UserContext);
  const [formStep, setFormStep] = useState(0)
  const nextFormStep = () => setFormStep(prevStep => prevStep + 1);
  const prevFormStep = () => setFormStep(prevStep => prevStep - 1);
  const [user, setUser] = useState(
    {
      userType: '',
      name: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      state: '',
      profilePicture: ''
    }
  );
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log(user);
  }
  const handleClick = userType => {
    setUserType(userType);
    nextFormStep();
  }

  return (
    <Layout>
      <div className='font-lexend text-4xl w-full h-[100vh] relative flex flex-col md:flex-row overflow-clip'>
        <div className='w-full md:w-1/2 bg-white h-1/2 flex justify-center md:h-full px-4 relative'>
          {/*Ver cómo hacer que si llego de otra parte, hero section o nav mobile, no aparezca esto y me brinque a lo otro, if (!userType) {} else if (userType == 'cliente'){<Form/>}else{<FormQuote/>}*/}
          <FormStep currentFormStep={0} formStep={formStep}>
            <p className='mb-14'>¿Eres cliente de un abogado o buscas uno?</p>
            <Button onClick={() => handleClick('cliente')} size='big' color='blue'>Regístrate aquí</Button>
          </FormStep>

          {/*al cambiar de userType se deja de renderizar al instante el Form o los FormQuotes, entonces, sería buena idea intentar con un transition que encierre esto*/}

          {userType === 'cliente' ? <Form formStep={formStep} prevFormStep={prevFormStep} nextFormStep={nextFormStep} userType={userType}/>
            : <FormQuotes formStep={formStep} userType={userType}/>}
        </div>
        <div className='w-full relative md:w-1/2 bg-slate-200 h-1/2 md:h-full flex flex-col items-center px-4 text-center justify-center'>
          <FormStep transition='transform' currentFormStep={0} formStep={formStep}>
            <p className='mb-14'>¿Eres un abogado o formas parte de un despacho?</p>
            <Button onClick={() => handleClick('abogado')} size='big' color='blue'>Regístrate aquí</Button>
          </FormStep>
          {userType === 'abogado' ? <Form formStep={formStep} userType={userType} prevFormStep={prevFormStep} nextFormStep={nextFormStep}/>
          : <FormQuotes formStep={formStep} userType={userType}/>}
        </div>
      </div>
    </Layout>
  )
}