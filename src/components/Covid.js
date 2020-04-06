import React, { Component } from "react";
import styled from "styled-components";
import Menyu from "../UI/Menyu";
import Navigation from "../UI/Navigation";

class Covid extends Component {
  state = {
    showMenyu: false,
  };

  menyuToggleHandler = () => {
    this.setState({ showMenyu: true });
  };

  menyuCloseHandler = () => {
    this.setState({ showMenyu: false });
  };

  render() {
    return (
      <Container>
        {this.state.showMenyu ? (
          <Menyu backdropClicked={this.menyuCloseHandler} />
        ) : null}
        <Navigation menyuClicked={this.menyuToggleHandler} />

        <div className="covid">
          <div className="question">1.Koronavirus qanday kasallik?</div>
          <div className="answer">
            Koronavirus bu – respirator virus, u Covid-19 kasalligini keltirib
            chiqaradi.
          </div>
        </div>

        <div className="covid">
          <div className="question">2.Koronavirus qanday yuqadi?</div>
          <div className="answer">
            Viruslar aksirish yoki yo‘talish paytida havoga chiqariladigan juda
            mayda tupuk tomchilari orqali yuqadi. Bundan tashqari, koronavirusni
            qattiq yuza – masalan eshik tutqichi yuqtirishdan mumkin.
          </div>
        </div>

        <div className="covid">
          <div className="question">3.Kasallikning belgilari qanday?</div>
          <div className="answer">
            Isitma, lanjlik va quruq yo‘tal. Yana ba’zan burun bitishi, tumov,
            mushak og‘riqlari, tomoq og‘rig‘i va ich surishi.
          </div>
        </div>

        <div className="covid">
          <div className="question">
            4.O‘zida kasallik alomatini sezgan fuqarolar qayerga borishlari
            kerak?
          </div>
          <div className="answer">
            Koronavirus alomatlarini sezgan fuqaro xonadonidan chiqmasdan tez
            tibbiy yordam yoki poliklinika shifokoriga murojaat qiladi. Bundan
            tashqari, Sog‘liqni saqlash vazirligining 1003 qisqa raqamiga
            qo‘ng‘iroq qilib, xabar berish kerak.
          </div>
        </div>

        <div className="covid">
          <div className="question">5.Koronavirus keksalar uchun xavflimi?</div>
          <div className="answer">
            Yosh — koronavirus kasalligi keltirib chiqaradigan o‘limga ta’sir
            ko‘rsatuvchi asosiy omillardan biri. Bu virus ilk bora aniqlangan
            Xitoyda o‘tkazilgan tadqiqotlar shuni ko‘rsatadiki odam qanchalik
            keksa yoshda bo‘lsa, uning uchun koronavirus shunchalik xavfli
            bo‘ladi.
          </div>
        </div>

        <div className="covid">
          <div className="question">
            6.Koronavirusning homilador ayollarga ta’siri qanday?
          </div>
          <div className="answer">
            Homilador ayollarning koronavirusga chalinish ehtimoli ko‘proq ekani
            yoki infektsiya asoratlariga ko‘proq moyil ekani haqida aniq
            tasdiqlangan ilmiy-tadqiqotlar xulosasi yo‘q.
          </div>
        </div>

        <div className="covid">
          <div className="question">
            7.Koronavirus uzoq masofalarga havo orqali tarqalishi mumkinmi?
          </div>
          <div className="answer">
            Yo‘q, koronavirus uzoq masofalarga havo orqali tarqalmaydi. Bu virus
            asosan yo‘talgan yoki aksirgan paytda kasal odamning og‘zidan yoki
            burnidan sachragan tomchilar orqali yuqadi.
          </div>
        </div>

        <div className="covid">
          <div className="question">
            8.Kasallik belgilari qancha vaqtda paydo bo‘ladi?
          </div>
          <div className="answer">
            Koronavirus belgilari 14 kundan so‘ng paydo bo‘la boshlaydi.
          </div>
        </div>

        <div className="covid">
          <div className="question">
            9.Niqoblar koronavirusdan himoya qiladimi?
          </div>
          <div className="answer">
            Tibbiy niqoblar samara beradi. Faqat niqoblarning turiga qarab
            ulardan 20 daqiqadan 3 soatgacha foydalanish mumkin.
          </div>
        </div>
      </Container>
    );
  }
}

export default Covid;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .covid {
    width: 60%;
    font-size: 16px;
    padding: 10px;
    @media screen and (max-width: 428px) {
      width: 90%;
    }
    .question {
      font-weight: bold;
      background: rgba(82, 87, 201, 0.24);
      color: black;
      padding: 10px;
      border-radius: 10px;
    }

    .answer {
      padding: 5px 5px;
    }
  }
`;
