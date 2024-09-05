import { Component } from '@angular/core';

@Component({
  selector: 'app-track-record',
  templateUrl: './track-record.component.html',
  styleUrls: ['./track-record.component.scss']
})
export class TrackRecordComponent {
    private basePath: string = '/assets/icons/track-record/';

    icons: { imgUrl: string }[] = [
        'abogados.svg', 'ahona logistcs.svg', 'amw.svg', 'antalis.svg', 'bahco.svg', 'bakertilly.svg', 'beepmedia.svg', 'bellme-clinic.svg',
        'bescon.svg', 'bestmart.svg', 'bIzland.svg', 'blackveatch.svg', 'blascool.svg', 'blascool-1.svg', 'bodegas cimenta.svg',
        'bodegas fac.svg', 'campos de chile.svg', 'castaño.svg', 'cencosud.svg', 'central bodegas.svg',
        'construmart.svg', 'crece seguro.svg', 'doremi.svg', 'edge connex.svg', 'elecnor.svg', 'eliglu.svg',
        'enex.svg', 'engie.svg', 'entel.svg', 'envases aguila.svg', 'equans.svg', 'etienne marcel.svg', 'Everest.svg',
        'forever.svg', 'Frame 3262.svg', 'fresenius.svg', 'funtour.svg', 'gea tasaciones.svg', 'getfit.svg',
        'global storage.svg', 'grow up.svg', 'grupo mor.svg', 'grupodeveloper.svg', 'hkn.svg', 'hunter.svg',
        'icc abogados.svg', 'inbox.svg', 'independencia.svg', 'infocap.svg', 'inversiones security.svg', 'isj.svg',
        'ISS.svg', 'itelogic.svg', 'jacima.svg', 'jokr.svg', 'konegranes.svg', 'liberty.svg', 'logo_kersting.svg',
        'Logo-GS.svg', 'logo-gsi-capital-footer.svg', 'logo-imel.svg', 'LOGO-METROPOL_OG.svg', 'maersk.svg',
        'masplay.svg', 'medtronic.svg', 'megacentro.svg', 'megaflex.svg', 'mersan.svg', 'metalpar.svg', 'mindray.svg',
        'multiaceros.svg', 'neomaq.svg', 'nomad genetics.svg', 'NOMAD.svg', 'ocrcamp.svg', 'Onnesta.svg', 'oxxo.svg',
        'pacific fitness.svg', 'plan3.svg', 'puente pacific.svg', 'rentokil.svg', 'retco.svg', 'sacyr.svg', 'seis luces.svg',
        'seneka.svg', 'sitrans.svg', 'smu.svg', 'subway.svg', 'surdiseño.svg', 'the garage company.svg', 'tooltek.svg',
        'traverso.svg', 'tucapel.svg', 'work plaza.svg'
    ].map(icon => ({ imgUrl: this.basePath + icon }));
}