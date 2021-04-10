<template>
    <footer>
		<ul class="ulContainer">
            <div class="aaue">
                <img src="#" alt="">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem earum animi reprehenderit, accusantium molestiae dolores enim eaque magnam ratione, minus, nisi repellat sed. Quo possimus in, nesciunt similique unde officia?</p> 
            </div>
            <div class="pages">
                <ul class="ulPages">
                    <li><router-link class="navLinks" to="/">Home</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Home' }">Secçao 1</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Home' }">Secçao 2</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Home' }">Secçao 3</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Home' }">Secçao 4</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Home' }">Secçao 5</router-link></li>
                    <li><router-link class="navLinks" :to="{ name: 'Home' }">Secçao 6</router-link></li>
                </ul>
            </div>
            <div class="contactInfo">
                <h1>Contacta-nos!</h1>
                <li>
                    <a href="https://goo.gl/maps/hMu13iR5NiM2">
                    <i class="fas fa-map-marker-alt icon" aria-hidden="true"></i>
                    <p> Nome da Rua <br> Cidade </p>
                    </a>
                    
                </li>
                <li>
                    <a href="mailto:emaiil@email.com">
                        <i class="fas fa-envelope icon" aria-hidden="true"></i>
                        <p>Email</p>
                    </a>
                </li>
                <li>
                    <a href="tel:numero">
                        <i class="fas fa-phone icon" aria-hidden="true"></i>
                        <p>numero de telefone</p>
                    </a>
                </li>
            </div>
            <div class="socials">
                <div class="icons">
                    <li>
                        <a class="icon" id="alojamento" href="#" target="_blank">
                            <i class="fas fa-home"></i>
                            <p>Outra ligaçao</p>
                        </a>
                    </li>
                    <li>
                        <a class="icon" id="reitor" href="#" target="_blank">
                            <i class="fas fa-futbol"></i>
                             <p>Outra ligaçao</p> 
                        </a>
                    </li>
                    <li>
                        <a class="icon" id="queima" href="#" target="_blank">
                            <i class="fas fa-music"></i>
                            <p>Outra ligaçao</p> 
                        </a>
                    </li>
                    <li>
                        <a class="icon" id="facebook" href="#" target="_blank">
                            <i class="fab fa-facebook-square"></i>
                             <p>Outra ligaçao</p> 
                        </a>
                    </li>
                    <li>
                        <a class="icon" id="instagram" href="#" target="_blank">
                            <i class="fab fa-instagram"></i>
                             <p>Outra ligaçao</p> 
                        </a>
                    </li>
			        <li>
                        <a class="icon" id="linkedin" href="#" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                            <p>Outra ligaçao</p> 
                        </a>
                    </li>  
                </div>
            </div>
		</ul>
		
	</footer>
</template>

<script lang="ts"> 
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
});
</script>

<style lang="scss">
$textColor: #f7f7f7;
$backgroundColor: #171717;
footer {
	display: flex;
	flex-direction: column;
    justify-content: space-around;
	color: $textColor;
	background-color: $backgroundColor;
	padding-top: 30px;
    .ulContainer {
        display: flex;
        margin-bottom: 25px;
        font-size: 32px;
        justify-content: space-around;
        .aaue {
            display: flex;
            flex-direction: column;
            width: 20%;
            img {
                margin-bottom: 30px;
            }
        }
        .pages {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .ulPages {
                display: flex;
                flex-direction: column;
                justify-content: center;
                li {
                    padding-top: 5px;
                }
                a {
                    color: $textColor;
                    font-size: 20px;
                }
            }
            
        }
        .contactInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1 {
                color: $textColor;
                opacity: 0.9;
                font-size: 30px;
            }
            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 35px;
                padding-top: 40px;
                margin: 10px 8px;
                a {
                    display: flex;
                    align-items: center;
                    color: $textColor;
                    margin-right: 10px;
                    i {
                        margin-right: 10px;
                    }
                }
                .icon {
                    display: flex;
                    justify-content: center;
                   
                }
                .fa-phone {
                    color:#89CFF0;
                }
                .fa-map-marker-alt {
                    color:#e96656;
                }
                .fa-envelope {
                    color:#90EE90;
                }
                .fa-fax {
                    color:#ffc0cb;
                }
                &:first-child{
                    margin-left: 0;	
                }
                &:last-child{
                    margin-right: 0;	
                }
            }
        }
    }
   
    .socials {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .icons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: $textColor;
            .icon {
                display: flex;
                align-items: center;
                text-align: center;
                color: $textColor;
                font-size: 20px;
                margin: 5px 0 5px 0;
                i {
                    margin: 10px 10px 0 0;
                    font-size: 30px;
                }
                p {
                    text-transform: uppercase;
                    color: $textColor;
                    margin: 10px 0 0 0;
                    transition: color 0.2s ease-in;
                }
            }
            #alojamento:hover,
            #alojamento:hover p {
                color: #d80b0b;
            }
            #reitor:hover,
             #reitor:hover p {
                color: #6db66d;
            }
            #queima:hover,
            #queima:hover p {
                color: #e7c137;
            }
            #instagram:hover,
             #instagram:hover p {
                color: #8a3ab9;
            }
            #facebook:hover,
            #facebook:hover p {
                color: #3b5998;
            }
            #linkedin:hover,
            #linkedin:hover p {
                color: #2867B2;
            }
        }
    }
    p{
        font-size: 16px;
    }
}
@media (max-width: 700px){
	footer {
		padding: 80px 15px;
	}
}
</style>