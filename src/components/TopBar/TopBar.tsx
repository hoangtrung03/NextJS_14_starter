export default function TopBar() {
  return (
    <div className='h-[3.75rem] leading-[3.75rem] hidden lg:block shadow-third relative z-50 bg-third border-b'>
      <div className='container flex justify-between'>
        <div className='flex items-center'>
          <p className='text-14 font-normal mx-1'>Consultant &amp; Support</p>
          <p>
            <strong className='text-red-1 text-14 font-semibold leading-1-1'>
              <a target='_blank' title='+84 974 838 004' href='tel:+84974838004'>
                +84 974 838 004
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  )
}
