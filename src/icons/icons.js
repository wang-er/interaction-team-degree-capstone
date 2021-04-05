
import React from 'react';
import { green, lightGray, teal }
    from "../components/base/colors"

export const GoalsSVG = (props) => (
<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.83337 27.9378L12.903 31.2943L22.7757 25.6528L31.1667 29.0092V6.12425L22.5577 2.68066L12.5971 8.37244L2.83337 5.11786V27.9378ZM19.8334 24.0708L14.1667 27.3089V10.7388L19.8334 7.50074V24.0708ZM22.6667 22.5576L28.3334 24.8243V8.04251L22.7757 5.81943L22.6667 5.8817V22.5576ZM5.66671 25.8956L11.3334 27.7845V10.9378L5.66671 9.0489V25.8956Z" fill={props.isHighlighted ? green : lightGray}/>
</svg>

);



export const SettingsSVG = (props) => (
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7691 0C17.0019 0.0134359 18.2296 0.156192 19.4338 0.424909C19.69 0.482095 19.9219 0.617886 20.0971 0.813307C20.2724 1.00873 20.3822 1.25402 20.4112 1.51489L20.6967 4.07946C20.7371 4.44103 20.8617 4.78809 21.0606 5.09271C21.2595 5.39733 21.5271 5.651 21.8419 5.83333C22.1568 6.01566 22.51 6.12154 22.8732 6.14246C23.2364 6.16337 23.5994 6.09874 23.9331 5.95377L26.2861 4.92088C26.525 4.81567 26.7906 4.78727 27.0464 4.83962C27.3021 4.89197 27.5353 5.02249 27.7136 5.21311C29.4132 7.02879 30.6788 9.20627 31.4152 11.5817C31.4924 11.8313 31.4901 12.0988 31.4086 12.3471C31.327 12.5953 31.1703 12.8121 30.9601 12.9673L28.8741 14.5057C28.5808 14.7212 28.3423 15.0027 28.1779 15.3274C28.0135 15.6521 27.9278 16.011 27.9278 16.375C27.9278 16.7389 28.0135 17.0978 28.1779 17.4225C28.3423 17.7473 28.5808 18.0287 28.8741 18.2442L30.9617 19.7809C31.1726 19.9361 31.3299 20.153 31.4117 20.4016C31.4936 20.6502 31.496 20.9182 31.4186 21.1682C30.6819 23.5435 29.4163 25.721 27.717 27.5368C27.5391 27.727 27.3066 27.8574 27.0516 27.91C26.7965 27.9627 26.5314 27.935 26.2928 27.8307L23.9297 26.7945C23.5965 26.6484 23.2336 26.5828 22.8703 26.603C22.507 26.6232 22.1536 26.7286 21.8386 26.9108C21.5237 27.093 21.256 27.3468 21.0574 27.6516C20.8587 27.9564 20.7346 28.3037 20.6951 28.6654L20.4112 31.2283C20.3826 31.4863 20.275 31.7292 20.103 31.9238C19.931 32.1183 19.7032 32.2549 19.4506 32.3149C17.0179 32.8937 14.4834 32.8937 12.0508 32.3149C11.7982 32.2549 11.5703 32.1183 11.3983 31.9238C11.2264 31.7292 11.1187 31.4863 11.0901 31.2283L10.8079 28.6688C10.7668 28.308 10.6416 27.9619 10.4424 27.6583C10.2431 27.3547 9.97544 27.1021 9.66082 26.9208C9.34621 26.7394 8.99344 26.6345 8.63087 26.6143C8.26831 26.5941 7.90606 26.6593 7.57327 26.8045L5.21191 27.8391C4.97305 27.9437 4.70761 27.9717 4.45221 27.919C4.19681 27.8664 3.96404 27.7358 3.78603 27.5452C2.08591 25.7274 0.820291 23.5476 0.0844516 21.1699C0.00702126 20.9198 0.00940613 20.6519 0.0912748 20.4033C0.173143 20.1547 0.330429 19.9377 0.541271 19.7826L2.62887 18.2442C2.92252 18.029 3.16133 17.7476 3.32594 17.4228C3.49055 17.098 3.57633 16.7391 3.57633 16.375C3.57633 16.0109 3.49055 15.6519 3.32594 15.3271C3.16133 15.0024 2.92252 14.7209 2.62887 14.5057L0.541271 12.9706C0.330726 12.8153 0.173775 12.5983 0.0922122 12.3497C0.0106494 12.1011 0.00852392 11.8333 0.086131 11.5834C0.822624 9.20797 2.08822 7.0305 3.78771 5.21479C3.96605 5.02416 4.19921 4.89365 4.45495 4.8413C4.71069 4.78895 4.97637 4.81735 5.21527 4.92256L7.56655 5.95545C7.9008 6.10034 8.26437 6.16481 8.62806 6.14369C8.99175 6.12257 9.34542 6.01645 9.66065 5.83384C9.97588 5.65124 10.2439 5.39724 10.4431 5.09226C10.6424 4.78728 10.7673 4.43982 10.8079 4.07778L11.0935 1.51489C11.1223 1.25349 11.2322 1.00766 11.4078 0.811886C11.5834 0.616109 11.8159 0.480205 12.0726 0.42323C13.2768 0.156192 14.5078 0.0151153 15.7691 0ZM15.7691 2.51922C15.0073 2.52817 14.2472 2.59385 13.4951 2.71572L13.3121 4.35658C13.2282 5.11161 12.9681 5.83637 12.5526 6.47237C12.1372 7.10838 11.578 7.63782 10.9203 8.018C10.2626 8.39817 9.52476 8.61843 8.76628 8.66099C8.0078 8.70356 7.24993 8.56725 6.55382 8.26306L5.04564 7.60134C4.08496 8.76711 3.32033 10.0814 2.7817 11.4927L4.12193 12.4786C4.73362 12.9281 5.23096 13.5153 5.57375 14.1926C5.91653 14.8699 6.09514 15.6184 6.09514 16.3775C6.09514 17.1366 5.91653 17.8851 5.57375 18.5624C5.23096 19.2397 4.73362 19.8269 4.12193 20.2764L2.78002 21.2639C3.31746 22.6781 4.0833 23.9948 5.04396 25.1637L6.5639 24.4969C7.25835 24.1937 8.01429 24.0578 8.77086 24.1001C9.52743 24.1424 10.2635 24.3618 10.9198 24.7405C11.5762 25.1192 12.1344 25.6468 12.5496 26.2806C12.9648 26.9145 13.2254 27.637 13.3104 28.39L13.4951 30.0426C14.9882 30.2945 16.5148 30.2945 18.0079 30.0426L18.1926 28.39C18.2762 27.636 18.5359 26.9123 18.9508 26.2772C19.3656 25.6421 19.9239 25.1135 20.5807 24.7339C21.2375 24.3544 21.9743 24.1346 22.7317 24.0922C23.4891 24.0499 24.2458 24.1862 24.9408 24.4902L26.4607 25.1553C27.4209 23.9888 28.185 22.674 28.723 21.2623L27.3828 20.2747C26.7711 19.8252 26.2737 19.238 25.9309 18.5607C25.5882 17.8834 25.4095 17.1349 25.4095 16.3758C25.4095 15.6167 25.5882 14.8682 25.9309 14.1909C26.2737 13.5136 26.7711 12.9264 27.3828 12.4769L28.7196 11.491C28.181 10.0797 27.4164 8.76543 26.4557 7.59966L24.9509 8.2597C24.2551 8.56427 23.4976 8.70097 22.7393 8.65877C21.981 8.61656 21.2432 8.39663 20.5856 8.01673C19.9279 7.63683 19.3689 7.10762 18.9535 6.47181C18.5381 5.836 18.278 5.11142 18.1943 4.35658L18.0096 2.7174C17.2692 2.59637 16.5209 2.53068 15.7708 2.5209L15.7691 2.51922ZM15.749 10.0769C17.4193 10.0769 19.0213 10.7404 20.2024 11.9216C21.3835 13.1027 22.047 14.7046 22.047 16.375C22.047 18.0453 21.3835 19.6472 20.2024 20.8284C19.0213 22.0095 17.4193 22.673 15.749 22.673C14.0786 22.673 12.4767 22.0095 11.2956 20.8284C10.1145 19.6472 9.45093 18.0453 9.45093 16.375C9.45093 14.7046 10.1145 13.1027 11.2956 11.9216C12.4767 10.7404 14.0786 10.0769 15.749 10.0769ZM15.749 12.5961C14.7468 12.5961 13.7856 12.9942 13.0769 13.7029C12.3683 14.4116 11.9702 15.3727 11.9702 16.375C11.9702 17.3772 12.3683 18.3383 13.0769 19.047C13.7856 19.7557 14.7468 20.1538 15.749 20.1538C16.7512 20.1538 17.7124 19.7557 18.421 19.047C19.1297 18.3383 19.5278 17.3772 19.5278 16.375C19.5278 15.3727 19.1297 14.4116 18.421 13.7029C17.7124 12.9942 16.7512 12.5961 15.749 12.5961Z" 
fill= {props.isHighlighted ? green : lightGray}/>
</svg>

);



export const WalletSVG = (props) => (
<svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.6262 9.00495H5.42332C3.43542 9.00495 1.83228 7.40181 1.83228 5.42307C1.83228 3.43517 3.43542 1.83203 5.42332 1.83203H28.7559C29.2414 1.83203 29.6353 2.22595 29.6353 2.71147V9.00495H29.6262Z" stroke={props.isHighlighted ? green : lightGray} stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M1.83228 5.42285L2.04297 26.4561C2.04297 27.4729 3.05982 28.2882 4.3057 28.2882H32.9241C34.1791 28.2882 35.1868 27.4638 35.1868 26.4561V11.1667C35.1868 10.1498 34.0967 9.00473 32.8508 9.00473H28.1788" stroke={props.isHighlighted ? green : lightGray} stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M26.6762 20.4373C28.0371 20.4373 29.1404 19.334 29.1404 17.973C29.1404 16.6121 28.0371 15.5088 26.6762 15.5088C25.3152 15.5088 24.2119 16.6121 24.2119 17.973C24.2119 19.334 25.3152 20.4373 26.6762 20.4373Z" fill={props.isHighlighted ? green : lightGray}/>
</svg>

);