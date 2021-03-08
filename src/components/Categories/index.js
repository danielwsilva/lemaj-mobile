import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Categorie, CategorieText } from './styles';

const Categories = ({index, value}) => {
  const Categories = (index) => {
    var valida = false;

    if (index === 0) {
      valida = true;
      categoie = 'Alkymia';
    } else if (index === 35) {
      valida = true;
      categoie = 'Leave-Ins';
    } else if (index === 39) {
      valida = true;
      categoie = 'Hair Theraphy';
    } else if (index === 50) {
      valida = true;
      categoie = 'Botox Absolut Repair';
    } else if (index === 55) {
      valida = true;
      categoie = 'Coconut & Argan';
    } else if (index === 61) {
      valida = true;
      categoie = 'Curl & Wave Advanced Program';
    } else if (index === 67) {
      valida = true;
      categoie = 'Flores e Vegetais';
    } else if (index === 82) {
      valida = true;
      categoie = 'Fito Capillus';
    } else if (index === 93) {
      valida = true;
      categoie = 'Color Retention Metology';
    } else if (index === 99) {
      valida = true;
      categoie = "Gradha Colo'r ";
    } else if (index === 103) {
      valida = true;
      categoie = 'Professional Hair Care';
    } else if (index === 116) {
      valida = true;
      categoie = 'Progressive Liss Conception';
    } else if (index === 125) {
      valida = true;
      categoie = 'Curl & Wave';
    } else if (index === 132) {
      valida = true;
      categoie = 'Matiz P.21 Violet';
    } else if (index === 136) {
      valida = true;
      categoie  = 'Relaxing advanced progam';
    }

    return valida;
  }

  return (
    Categories(index) && !value && (
      <Categorie colors={['#e67e22', '#e74c3c']} start={{x:2, y:0}} end={{x:0, y:0.5}}>
        <Icon name="package" color="#fff" size={20} />
        <CategorieText>{categoie}</CategorieText>
      </Categorie>
    )
  )
}

export default Categories;