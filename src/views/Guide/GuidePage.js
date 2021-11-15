import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { HeaderBrand } from "../../components/Header/HeaderBrand";

// import GuideSection from "views/Sections/GuideSection";
import { Helmet } from "react-helmet";
import { guidePage } from "assets/text";
import GuideSamples from "./GuideSamples";

const useStyles = makeStyles(styles);

GuidePage.propTypes = {
  t: PropTypes.func
};

function GuidePage(props) {
  const classes = useStyles();
  const {t} = props;
  const {...rest} = props;

  const guideTopics = require("../../assets/text").presentations.topics;
  const topicsData = {
    "Introduction to Diabetes": {
      "en": [
        require("assets/img/guide/1_introduction_to_diabetes.jpg").default,
        require("assets/img/guide/1_introduction_to_diabetes_2.jpg").default,
        require("assets/img/guide/1_introduction_to_diabetes_3.jpg").default,
        require("assets/img/guide/1_introduction_to_diabetes_4.jpg").default
      ],
      "es": [
        require("assets/img/guide/1_introduccion_a_la_diabetes.jpg").default,
        require("assets/img/guide/1_introduccion_a_la_diabetes_2.jpg").default,
        require("assets/img/guide/1_introduccion_a_la_diabetes_3.jpg").default,
        require("assets/img/guide/1_introduccion_a_la_diabetes_4.jpg").default],
      "url": ""
    },
    "Nutrition and Carbohydrate Counting": {
      "en": [
        require("assets/img/guide/2_nutrition_and_carbohydrate_counting.jpg").default,
        require("assets/img/guide/2_nutrition_and_carbohydrate_counting_2.jpg").default,
        require("assets/img/guide/2_nutrition_and_carbohydrate_counting_3.jpg").default,
        require("assets/img/guide/2_nutrition_and_carbohydrate_counting_4.jpg").default,
      ],
      "es": [
        require("assets/img/guide/2_nutricion_y_conteo_de_carbohidratos.jpg").default,
        require("assets/img/guide/2_nutricion_y_conteo_de_carbohidratos_2.jpg").default,
        require("assets/img/guide/2_nutricion_y_conteo_de_carbohidratos_3.jpg").default,
        require("assets/img/guide/2_nutricion_y_conteo_de_carbohidratos_4.jpg").default,
      ],
      "url": ""
    },
    "Physical Activity": {
      "en": [
        require("assets/img/guide/3_physical_activity.jpg").default,
        require("assets/img/guide/3_physical_activity_2.jpg").default,
        require("assets/img/guide/3_physical_activity_3.jpg").default,
      ],
      "es": [
        require("assets/img/guide/3_la_diabetes_y_la_actividad_fisica.jpg").default,
        require("assets/img/guide/3_la_diabetes_y_la_actividad_fisica_2.jpg").default,
        require("assets/img/guide/3_la_diabetes_y_la_actividad_fisica_3.jpg").default,
      ],
      "url": ""
    },
    "Weight Management": {
      "en": [
        require("assets/img/guide/4_weight_management.jpg").default,
        require("assets/img/guide/4_weight_management_2.jpg").default,
        require("assets/img/guide/4_weight_management_3.jpg").default,
        require("assets/img/guide/4_weight_management_4.jpg").default,
      ],
      "es": [
        require("assets/img/guide/4_perdida_de_peso.jpg").default,
        require("assets/img/guide/4_perdida_de_peso_2.jpg").default,
        require("assets/img/guide/4_perdida_de_peso_3.jpg").default,
        require("assets/img/guide/4_perdida_de_peso_4.jpg").default,
      ],
      "url": ""
    },
    "Blood Glucose Monitoring": {
      "en": [
        require("assets/img/guide/5_blood_glucose_monitoring.jpg").default,
        require("assets/img/guide/5_blood_glucose_monitoring_2.jpg").default,
        require("assets/img/guide/5_blood_glucose_monitoring_3.jpg").default,
        require("assets/img/guide/5_blood_glucose_monitoring_4.jpg").default,
      ],
      "es": [
        require("assets/img/guide/5_la_importancia_de_medir_la_glucosa.jpg").default,
        require("assets/img/guide/5_la_importancia_de_medir_la_glucosa_2.jpg").default,
        require("assets/img/guide/5_la_importancia_de_medir_la_glucosa_3.jpg").default,
        require("assets/img/guide/5_la_importancia_de_medir_la_glucosa_4.jpg").default,
      ],
      "url": ""
    },
    "Medication Management": {
      "en": [
        require("assets/img/guide/6_medication_management.jpg").default,
        require("assets/img/guide/6_medication_management_2.jpg").default,
        require("assets/img/guide/6_medication_management_3.jpg").default,
        require("assets/img/guide/6_medication_management_4.jpg").default,
      ],
      "es": [
        require("assets/img/guide/6_las_medicinas_de_la_diabetes.jpg").default,
        require("assets/img/guide/6_las_medicinas_de_la_diabetes_2.jpg").default,
        require("assets/img/guide/6_las_medicinas_de_la_diabetes_3.jpg").default,
        require("assets/img/guide/6_las_medicinas_de_la_diabetes_4.jpg").default,
      ],
      "url": ""
    },
    "Complications of Uncontrolled Diabetes": {
      "en": [
        require("assets/img/guide/7_complications_of_uncontrolled_diabetes.jpg").default,
        require("assets/img/guide/7_complications_of_uncontrolled_diabetes_2.jpg").default,
        require("assets/img/guide/7_complications_of_uncontrolled_diabetes_3.jpg").default,
        require("assets/img/guide/7_complications_of_uncontrolled_diabetes_4.jpg").default,
      ],
      "es": [
        require("assets/img/guide/7_complicaciones_de_la_diabetes.jpg").default,
        require("assets/img/guide/7_complicaciones_de_la_diabetes_2.jpg").default,
        require("assets/img/guide/7_complicaciones_de_la_diabetes_3.jpg").default,
        require("assets/img/guide/7_complicaciones_de_la_diabetes_4.jpg").default,
      ],
      "url": ""
    },
    "Managing Sick Days": {
      "en": [
        require("assets/img/guide/8_managing_sick_days.jpg").default,
        require("assets/img/guide/8_managing_sick_days_2.jpg").default,
        require("assets/img/guide/8_managing_sick_days_3.jpg").default,
      ],
      "es": [
        require("assets/img/guide/8_manejo_de_los_dia_de_enfermedad.jpg").default,
        require("assets/img/guide/8_manejo_de_los_dia_de_enfermedad_2.jpg").default,
        require("assets/img/guide/8_manejo_de_los_dia_de_enfermedad_3.jpg").default,
      ],
      "url": ""
    },
    "Living with Diabetes": {
      "en": [
        require("assets/img/guide/9_living_with_diabetes.jpg").default,
        require("assets/img/guide/9_living_with_diabetes_2.jpg").default,
      ],
      "es": [
        require("assets/img/guide/9_vivir_con_diabetes.jpg").default,
        require("assets/img/guide/9_vivir_con_diabetes_2.jpg").default,
      ],
      "url": ""
    },
    "Insulin": {
      "en": [
        require("assets/img/guide/10_insulin.jpg").default,
        require("assets/img/guide/10_insulin_2.jpg").default,
        require("assets/img/guide/10_insulin_3.jpg").default,
      ],
      "es": [
        require("assets/img/guide/10_insulina.jpg").default,
        require("assets/img/guide/10_insulina_2.jpg").default,
        require("assets/img/guide/10_insulina_3.jpg").default,
      ],
      "url": ""
    }
  };

  return (
    <div>
      <Helmet>
        <title>{t(guidePage.pageTitle)}</title>
        <meta name="description" content={guidePage.metaAddress}/>
        <meta charSet="utf-8"/>
      </Helmet>
      <Header
        color="transparent"
        leftLinks={<HeaderBrand className={classes.navLink}/>}
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>

          <div className={classes.container}>
            <div className={classes.section}>
              {/*<GuideSection />*/}
              <GuideSamples guideTopics={guideTopics} topicsData={topicsData}/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default withTranslation("translations")(GuidePage);
