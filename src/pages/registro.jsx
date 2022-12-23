import {useState, useContext} from "react";
import {Transition} from "@headlessui/react";

import Button from "@/components/Button";
import Layout from "@/components/HomeLayout";
import {UserContext} from "../../context/userContext";
import {BsPeopleFill, BsPersonFill} from "react-icons/bs";
import {BiArrowBack} from "react-icons/bi";
import IconButton from "@/components/IconButton";

function FormStep({currentFormStep, formStep, children, transition = 'opacity'}) {
  return transition === 'opacity' ? (
    <Transition appear={true} className='absolute w-full h-full flex flex-col justify-center items-center text-center' show={currentFormStep === formStep}
                enter='absolute transition-opacity duration-500 delay-200' leave='transition-opacity duration-500 relative delay-100'
                enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
      {children}
    </Transition>
  ) : (
    <Transition appear={true} className='absolute w-full h-full flex flex-col justify-center items-center text-center' show={currentFormStep === formStep}
                enter='absolute transition duration-500 transform delay-200' leave='transition-opacity duration-500 relative delay-100'
                enterFrom='translate-x-full' enterTo='translate-x-0' leaveFrom='opacity-100' leaveTo='opacity-0'>
      {children}
    </Transition>
  )
}

function FormQuotes({formStep, userType}) {
  return userType === 'lawyer' ? (
    <>
      <FormStep currentFormStep={1} formStep={formStep}>
        <p className='text-7xl px-40 font-lexend leading-loose'>Ayuda a tus clientes a entender</p>
      </FormStep>
    </>
  ) : (
    <>
      <FormStep transition='transform' currentFormStep={1} formStep={formStep}>
        <p className='text-7xl px-40 font-lexend leading-loose'>Mantente al tanto de tu caso en todo momento.</p>
      </FormStep>
    </>
  )
}

function Form({formStep, userType, nextFormStep, prevFormStep}) {

  const [checkedButton, setCheckedButton] = useState('');

  return userType === 'lawyer' ? (
    <>
      <FormStep transition='transform' currentFormStep={1} formStep={formStep}>
        <p className='text-2xl font-lexend text-slate-900'>¿Cómo deseas registrarte?</p>
        <div className='pt-10 flex w-96 justify-around'>
          <IconButton text='Abogado' checkedButton={checkedButton} buttonNumber={1} onClick={() => setCheckedButton(1)} Icon={BsPersonFill} />
          <IconButton text='Despacho' checkedButton={checkedButton} buttonNumber={2} onClick={() => setCheckedButton(2)} Icon={BsPeopleFill}/>
        </div>
      </FormStep>
      <FormStep transition='transform' currentFormStep={2} formStep={formStep}>
        <p className='mt-10 text-2xl font-lexend'>Cuéntanos un poco de ti</p>
        <div className='text-base flex flex-col w-2/3 justify-center items-center h-[45%] pt-10'>
          <div className='flex w-full justify-between mb-20'>
            <div className='flex flex-col-reverse w-[45%] items-start'>
              <input name='first-name' id='first-name' autoComplete='given-name' className='w-full peer bg-slate-200 border-2 rounded-md border-slate-500 py-3 px-4 shadow-md focus:scale-105 focus:bg-slate-100 focus:border-slate-900'/>
              <label htmlFor='first-name' className='peer-focus:scale-110 peer-focus:-translate-y-2 transition-all'>Nombre</label>
            </div>
            <div className='flex flex-col-reverse w-[45%] items-start focus:scale-110'>
              <input name='last-name' id='last-name' autoComplete='family-name' className='w-full peer transition-all bg-slate-200 border-2 rounded-md border-slate-500 py-3 px-4 shadow-md focus:scale-105 focus:bg-slate-100 focus:border-slate-900'/>
              <label htmlFor='first-name' className='peer-focus:scale-110 peer-focus:-translate-y-2 transition-all'>Apellido</label>
            </div>
          </div>
          <div className='flex flex-col-reverse w-full items-start'>
            <input name='email' id='email' autoComplete='email' className='w-full peer transition-all bg-slate-200 border-2 rounded-md border-slate-500 py-3 px-4 shadow-md focus:scale-105 focus:bg-slate-100 focus:border-slate-900'/>
            <label htmlFor='first-name' className='peer-focus:scale-110 peer-focus:-translate-y-2 transition-all'>Email</label>
          </div>
        </div>
      </FormStep>
      <Transition appear={true} className='absolute top-72 left-40 flex justify-around' show={formStep > 0} enter='transition-opacity duration-500 delay-200' leave='transition-opacity duration-300' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
        <button className='text-lg flex items-center after:absolute after:top-9 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-slate-900 after:scale-x-0 after:transition-all hover:after:scale-x-100' onClick={prevFormStep}><BiArrowBack size={22}/><p className='pl-2 text-lg text-slate-900'>Regresar</p></button>
      </Transition>
      <Transition appear={true} className='absolute bottom-40 w-full px-4 flex justify-center' show={formStep > 0} enter='transition-opacity duration-500 delay-200' leave='transition-opacity duration-300' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
        <Button variant='outline' color={!checkedButton && formStep === 1 ? 'gray' : 'slate'} size='medium' className='w-52' onClick={!checkedButton && formStep === 1 ? '' : nextFormStep} >Siguiente</Button>
      </Transition>
    </>
  ) : (<>
      <FormStep currentFormStep={1} formStep={formStep}>
        <p className='mt-10 text-2xl font-lexend'>Cuéntanos un poco de ti</p>
        <div className='text-base flex flex-col w-2/3 justify-center items-center h-[45%] pt-10'>
          <div className='flex w-full justify-between mb-20'>
            <div className='flex flex-col-reverse w-[45%] items-start'>
              <input name='first-name' id='first-name' autoComplete='given-name' className='w-full peer bg-white border-2 rounded-md border-slate-500 py-3 px-4 shadow-md focus:scale-105 focus:bg-slate-50'/>
              <label htmlFor='first-name' className='peer-focus:scale-110 peer-focus:-translate-y-2 transition-all'>Nombre</label>
            </div>
            <div className='flex flex-col-reverse w-[45%] items-start focus:scale-110'>
              <input name='last-name' id='last-name' autoComplete='family-name' className='w-full peer transition-all bg-white border-2 rounded-md border-slate-500 py-3 px-4 shadow-md focus:scale-105 focus:bg-slate-100'/>
              <label htmlFor='first-name' className='peer-focus:scale-110 peer-focus:-translate-y-2 transition-all'>Apellido</label>
            </div>
          </div>
          <div className='flex flex-col-reverse w-full items-start'>
            <input name='email' id='email' autoComplete='email' className='w-full peer transition-all bg-white border-2 rounded-md border-slate-500 py-3 px-4 shadow-md focus:scale-105 focus:bg-slate-100'/>
            <label htmlFor='first-name' className='peer-focus:scale-110 peer-focus:-translate-y-2 transition-all'>Email</label>
          </div>
        </div>
      </FormStep>
      <Transition appear={true} className='absolute top-72 left-40 flex justify-around' show={formStep > 0} enter='transition-opacity duration-500 delay-200' leave='transition-opacity duration-300' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
        <button className='text-lg flex items-center after:absolute after:top-9 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-slate-900 after:scale-x-0 after:transition-all hover:after:scale-x-100' onClick={prevFormStep}><BiArrowBack size={22}/><p className='pl-2 text-lg text-slate-900'>Regresar</p></button>
      </Transition>
      <Transition appear={true} className='absolute bottom-40 w-full px-4 flex justify-center' show={formStep > 0} enter='transition-opacity duration-500 delay-200' leave='transition-opacity duration-300' enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
        <Button variant='outline' size='medium' className='w-52' onClick={nextFormStep} color='slate'>Siguiente</Button>
      </Transition>
    </>
  )
}


export default function Registro() {

  const {userType, setUserType} = useContext(UserContext);
  const [formStep, setFormStep] = useState(userType ? 1 : 0)
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
            <Button onClick={() => handleClick('client')} size='big' color='blue'>Regístrate aquí</Button>
          </FormStep>
          {userType === 'client' ? <Form formStep={formStep} prevFormStep={prevFormStep} nextFormStep={nextFormStep} userType={userType}/>
            : <FormQuotes formStep={formStep} userType={userType}/>}
        </div>
        <div className='w-full relative md:w-1/2 bg-slate-200 h-1/2 md:h-full flex flex-col items-center px-4 text-center justify-center'>
          <FormStep transition='transform' currentFormStep={0} formStep={formStep}>
            <p className='mb-14'>¿Eres un abogado o formas parte de un despacho?</p>
            <Button onClick={() => handleClick('lawyer')} size='big' color='blue'>Regístrate aquí</Button>
          </FormStep>
          {userType === 'lawyer' ? <Form formStep={formStep} userType={userType} prevFormStep={prevFormStep} nextFormStep={nextFormStep}/>
          : <FormQuotes formStep={formStep} userType={userType}/>}
        </div>
      </div>
    </Layout>
  )
}