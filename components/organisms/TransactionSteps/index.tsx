import StepIcon from '../../molecules/StepIcon';

export default function TransactionSteps() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          It’s Really That
          <br />
          Easy to Win the Game
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepIcon
            icon="step1"
            title="Start"
            desc1="Pilih salah satu game"
            desc2="yang ingin kamu top up"
          />
          <StepIcon
            icon="step2"
            title="Fill up"
            desc1="Top up sesuai dengan"
            desc2="nominal yang sudah tersedia"
          />
          <StepIcon
            icon="step3"
            title="Be a Winner"
            desc1="Siap digunakan untuk"
            desc2="improve permainan kamu"
          />
        </div>
      </div>
    </section>
  );
}
