import { dividerClasses } from '@mui/material';
import React, {Component} from 'react';
import './app-menu-pages-2.scss';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Wavelength from './img/wavelength.jpg';
import LuminousFlux from './img/luminous flux.jpg';
import LightIntensity from './img/light intensity.jpg';
import LightOutput from './img/light output.jpg';
import ColorTemperature from './img/color temperature.jpg';
import CRI from './img/cri.jpg';
import IP from './img/IP.jpg';


export default function AppMenuPages2() {




    return(

        

        <>
        <div class="header">					

				<div class="header-top">
					<div class="header-top_row">
					<div class="text-left">
					<ChevronLeftIcon fontSize="large"/> 
					</div>
						<div class="header-title">
							<h2 class='work'>2 Основные понятия и определения</h2>							
						</div>
						<div class="text-right">
						<ChevronRightIcon  fontSize="large"/> 
						</div>
					
				
			</div>
					<div class="header-title_wrapper">
						<h3>Здравствуйте!</h3>
						<p className="welcome">
							В данном уроке мы познакомимся с основными понятиями и определениями, применяемыми в
							светотехнике,
							их необходимо знать для выполнения расчетов. Узнаем, как они связаны друг с другом и в чем
							их измеряют.
						</p>
						<p className="welcome"><b>Свет</b> - это воспринимаемое глазом (видимое) электромагнитное
							излучение,
							которое лежит в промежутке длин волн от 380 до 780 нм (1 нм = 10<sup>-9</sup> м).
						</p>
						<p className="welcome">
							Различают 3 зоны <b>светового излучения: </b> <br/>
							<ul className="welcome">
								<li>сине-фиолетовая 400-490 нм</li>
								<li>зеленая 490-570 нм</li>
								<li>красная 580-720 нм.</li>
							</ul>
						</p>
						<p className="welcome">
							Также существуют невидимые для глаза человека электромагнитные излучения, такие как: <br/>
							<ul className="welcome">
								<li><b>Ультрафиолетовое излучение</b>, занимающее спектральный диапазон между видимым и
									рентгеновским излучениями.
								</li>
								<li><b>Инфракрасное излучение</b>, занимающее спектральную область между красным концом
									видимого света и микроволновым радиоизлучением.
								</li>
							</ul>
						</p>
                         <div class="img">
							 <img className="light" src={Wavelength} alt="horse"/>
						 </div>
						<p className="welcome"><b>Световой поток</b> - это мощность видимого излучения, т.е. световая
							энергия,
							излучаемая по всем направлениям за единицу времени (единица измерения люмен [лм]). Более
							подробно про <a href="https://youtu.be/12Zv3IPFH5Q" target="_blank">световой поток</a>.
						</p>
						<p className="welcome"><b>Освещенность</b> определяет сколько светового потока падает на единицу
							площади(единица измерения люкс [лк]).
						</p>
						<div className="wrapper welcome">
							<div className="math">1 лк =</div>
							<div className="quotient">
								<div className="math_two">Световой поток</div>
								<div className="math_three">Площадь 1м<sup>2</sup></div>
							</div>
						</div>

						<div className="img">
							<img className="img_flux" src={LuminousFlux} alt="horse"/>
						</div>
						<p className="welcome"><b>Сила света</b> показывает, сколько света заключено в угол рассеивания
							(телесный угол)(единица измерения кандела [кд]). Более подробно про <a
								href="https://youtu.be/12Zv3IPFH5Q" target="_blank">силу света</a>.</p>
						<div className="wrapper welcome">
							<div className="math">Сила света =</div>
							<div className="quotient">
								<div className="math_two">Световой поток</div>
								<div className="math_three" id="second">Телесный угол</div>
							</div>

						</div>
						<div className="img">
							<img className="intensity" src={LightIntensity} alt="horse"/>
						</div>

						<p className="welcome">
							<b>Яркость</b> – отношение силы света, излучаемого предметом к проекции его площади (единица
							измерения [кд/м<sup>2</sup>]).
						</p>

						<p className="welcome">
							<b>Коэффициент отражения</b> — отношение света, отраженного телом, к упавшему на него [от 0
							до 1].

						</p>
						<p className="welcome">
							<b> Световая отдача</b> источника света — отношение излучаемого источником светового потока
							к потребляемой им мощности ( измеряется в люменах на ватт [лм/Вт]).
							Является показателем эффективности и экономичности источников света. Более подробно про <a
							href="https://youtu.be/qhRvwAHSOog" target="_blank">световую отдачу</a>.
						</p>

						<div className="img">
							<img className="output" src={LightOutput} alt="horse"/>
						</div>
						<p className="welcome">
							<b>Цветовая температура</b> – характеристика цветности освещаемого пространства (измеряется
							в кельвинах [к]).
						</p>

						<div className="img">
							<img className="intensity" src={ColorTemperature} alt="horse"/>
						</div>
						<p className="welcome">
							<b>Индекс цветопередачи (CRI)</b> - количественная мера способности источника света верно
							отображать цвета освещаемых объектов в сравнении с естественным источником света (шкала
							измерения от 0 до 100 [Ra]). Более подробно про <a href="https://youtu.be/yjqZHOZhBZ0"
																			   target="_blank">индекс цветопередачи</a>.
						</p>
						<div className="img">
							<img className="cri" src={CRI} alt="horse"/>
						</div>

						<p className="welcome"><b>Кривая силы света (КСС)</b> – форма распределения светового потока
							светильника. Более подробно про <a href="https://youtu.be/RAPJIELUFHg" target="_blank">кривая
								силы света</a>.</p>

						<div className="img">
							<img className="ip" src={IP} alt="horse"/>
						</div>

						<p className="welcome"><b>Обобщенный показатель дискомфорта UGR</b> (Unified Glare Rating) -
							мера слепящего действия, которое может производить установка внутреннего освещения.
						</p>

						<p className="welcome"><b>Коэффициент эксплуатации</b> (для искусственного освещения) MF,
							относительные единицы: Коэффициент, равный отношению освещенности или яркости в заданной
							точке,
							создаваемой осветительной установкой в конце установленного срока эксплуатации, к
							освещенности или яркости в той же точке в начале эксплуатации.
						</p>

					</div>




		</div>

	</div>


    

    </>
    
    
	
    )




}