import { Injectable } from '@angular/core';
import { Agent } from '../life/models/agent-model';
import { LifeCaps } from '../life/models/life-caps-model';

@Injectable({
  providedIn: 'root'
})
export class LifeService {

  constructor() {}

  searchAgents(lastName: string, firstName: string, agentId: string): Agent[] {
    return [
      { name: '* Baso, Chris', agentId: '1500520054', active: false },
      { name: '* Beastrom, Peggy J', agentId: '1500520010', active: false },
      { name: '* Brathwaite, Nicole', agentId: '1500520072', active: false },
      { name: '* Cataldo, Bob', agentId: '1500520060', active: false },
      { name: '* Dursky-Gish, Shari', agentId: '1500520112', active: false },
      { name: '* Gardner, Ryan', agentId: '1500520089', active: false },
      { name: '* Harpole, Karen', agentId: '1500520059', active: false },
      { name: '* Hartweg, Ben', agentId: '1500520070', active: false },
      { name: '* Higgins, James A', agentId: '1500520087', active: false },
      { name: '* Kerr, Barb', agentId: '1500520027', active: false },
      { name: '* Kupka, Taryn', agentId: '1500520117', active: false },
      { name: '* Larson, Amanda', agentId: '1500520093', active: false },
      { name: '* Lawrence, Angela', agentId: '1500520082', active: false },
      { name: '* Miller, Linda', agentId: '1500520041', active: false },
      { name: '* Morrow, Marty', agentId: '1500520125', active: false },
      { name: '* Myers, Carrie', agentId: '1500520068', active: false },
      { name: '* Nielsen, Lora', agentId: '1500520071', active: false },
      { name: '* Operator, Info Service', agentId: '1500520061', active: false },
      { name: '* Programmer, Uquote', agentId: '1500520058', active: false },
      { name: '* Reznicow, Karen', agentId: '1500520026', active: false },
      { name: '* Sheeley, Mike', agentId: '1500520057', active: false },
      { name: '* Thomas, Connie', agentId: '1500520028', active: false },
      { name: '* Uquote, Programmers', agentId: '1500520056', active: false },
      { name: '* Young, Joanne', agentId: '1500520050', active: false },
      { name: 'Almaw, Yohannes', agentId: '1500520077', active: true },
      { name: 'Baker, Marc', agentId: '1500520085', active: true },
      { name: 'Barnett, Nicole', agentId: '1500520096', active: true },
      { name: 'Beaman, Kevin', agentId: '1500520160', active: true },
      { name: 'Booher, Kathryn A', agentId: '1500520013', active: true },
      { name: 'Bracy, John', agentId: '1500520108', active: true },
      { name: 'Brauer, Thomas C', agentId: '1500520015', active: true },
      { name: 'Bri, Darnell', agentId: '1500520119', active: true },
      { name: 'Caraway, Rob', agentId: '1500520040', active: true },
      { name: 'Caspers, Joel', agentId: '1500520107', active: true },
      { name: 'Coker, Robert', agentId: '1500520124', active: true },
      { name: 'Cole, Rob', agentId: '1500520123', active: true },
      { name: 'Coleman, Lindsey', agentId: '1500520129', active: true },
      { name: 'Coleson, Bonnie', agentId: '1500520017', active: true },
      { name: 'Curd, Rich', agentId: '1500520094', active: true },
      { name: 'Dague, Melissa', agentId: '1500520046', active: true },
      { name: 'Davis, Erica L', agentId: '1500520021', active: true },
      { name: 'Desk, Ufg Help', agentId: '1500520090', active: true },
      { name: 'Dostal, Jeff', agentId: '1500520084', active: true },
      { name: 'Dwyer, Angela', agentId: '1500520062', active: true },
      { name: 'Ferguson, Joyce', agentId: '1500520081', active: true },
      { name: 'Fitzpatrick, Karla', agentId: '1500520065', active: true },
      { name: 'Ford, Sandy', agentId: '1500520063', active: true },
      { name: 'Fraley, Lisa', agentId: '1500520009', active: true },
      { name: 'Giddings, Becky', agentId: '1500520097', active: true },
      { name: 'Gogel, Phyllis', agentId: '1500520069', active: true },
      { name: 'Graney, Tim', agentId: '1500520118', active: true },
      { name: 'Graybill, Jayne', agentId: '1500520055', active: true },
      { name: 'Haas, Kayla', agentId: '1500520048', active: true },
      { name: 'Hakert, Lee', agentId: '1500520088', active: true },
      { name: 'Hamlett, Denise', agentId: '1500520110', active: true },
      { name: 'Hansen, Erin', agentId: '1500520122', active: true },
      { name: 'Haupert, Sue', agentId: '1500520078', active: true },
      { name: 'Houdek, Caleb', agentId: '1500520104', active: true },
      { name: 'Jacobs, Christian', agentId: '1500520116', active: true },
      { name: 'Jacobs, John', agentId: '1500520109', active: true },
      { name: 'Kempenich, Joe', agentId: '1500520103', active: true },
      { name: 'Klein, Chris', agentId: '1500520030', active: true },
      { name: 'Kress, Kathleen M', agentId: '1500520018', active: true },
      { name: 'Lambert, Sandra', agentId: '1500520016', active: true },
      { name: 'Lammers, Jennifer', agentId: '1500520115', active: true },
      { name: 'Larson, Susan', agentId: '1500520106', active: true },
      { name: 'Law, Danielle D', agentId: '1500520131', active: true },
      { name: 'Livingston, Lisa', agentId: '1500520126', active: true },
      { name: 'Lund, Jake', agentId: '1500520105', active: true },
      { name: 'Mcandrew, Kendra', agentId: '1500520074', active: true },
      { name: 'McDowell, Mark', agentId: '1500520158', active: true },
      { name: 'Mengelson-Clark, Ann', agentId: '1500520101', active: true },
      { name: 'Meyer, Adam', agentId: '1500520120', active: true },
      { name: 'Meyer, Casey', agentId: '1500520121', active: true },
      { name: 'Mullen, Jenny', agentId: '1500520144', active: true },
      { name: 'Murphy, Diane', agentId: '1500520086', active: true },
      { name: 'Myers, Mary Lou', agentId: '1500520052', active: true },
      { name: 'Newlin, Jean', agentId: '1500520024', active: true },
      { name: 'Nguyen, Lucy', agentId: '1500520128', active: true },
      { name: 'Open, Open', agentId: '1500520039', active: true },
      { name: 'Pasker, Michelle', agentId: '1500520053', active: true },
      { name: 'Penney, Val', agentId: '1500520032', active: true },
      { name: 'Perez, Janet', agentId: '1500520092', active: true },
      { name: 'Perla, Amulya', agentId: '1500520091', active: true },
      { name: 'Pisarik, Susan K', agentId: '1500520011', active: true },
      { name: 'Prohaska, Andrea', agentId: '1500520025', active: true },
      { name: 'Ravey, Tyler', agentId: '1500520113', active: true },
      { name: 'Riche, Cathy', agentId: '1500520127', active: true },
      { name: 'Richmond, Luann', agentId: '1500520076', active: true },
      { name: 'Rinaudo, Frank', agentId: '1500520102', active: true },
      { name: 'Rosenblatt, Brad', agentId: '1500520100', active: true },
      { name: 'Ruskey, Kelley', agentId: '1500520079', active: true },
      { name: 'Sears, Michael J', agentId: '1500520047', active: true },
      { name: 'Sherman, Julia A', agentId: '1500520007', active: true },
      { name: 'Simmers, Joye', agentId: '1500520075', active: true },
      { name: 'Stahl, Christina', agentId: '1500520098', active: true },
      { name: 'Taylor, Stacy', agentId: '1500520111', active: true },
      { name: 'Techau, Tonia', agentId: '1500520080', active: true },
      { name: 'Temp, Name', agentId: '1500520114', active: true },
      { name: 'Terbovic, Nicholas', agentId: '1500520036', active: true },
      { name: 'Test, Agent', agentId: '1500520020', active: true },
      { name: 'Thomas, Tamara A', agentId: '1500520099', active: true },
      { name: 'Veglahn, Jim', agentId: '1500520095', active: true }
    ];
  }

  getLifeCapsEntries(): LifeCaps[] {
    return [{
          wrongCase: 'Bastion Ins Group Llc',
          correctCase: 'Bastion Ins Group LLC'
      }, {
          wrongCase: 'Dipippa',
          correctCase: 'DiPippa'
      }, {
          wrongCase: 'Dipippa Insurance & Financial Llc',
          correctCase: 'DiPippa Insurance & Financial LLC'
      }, {
          wrongCase: 'Fra',
          correctCase: 'FRA'
      }, {
          wrongCase: 'Mcadams',
          correctCase: 'McAdams'
      }, {
          wrongCase: 'Mcallister',
          correctCase: 'McAllister'
      }, {
          wrongCase: 'Mcallister Fncl Serv',
          correctCase: 'McAllister Fncl Serv'
      }, {
          wrongCase: 'Mcatee',
          correctCase: 'McAtee'
      }, {
          wrongCase: 'Mcbride',
          correctCase: 'McBride'
      }, {
          wrongCase: 'Mccain',
          correctCase: 'McCain'
      }, {
          wrongCase: 'Mccall',
          correctCase: 'McCall'
      }, {
          wrongCase: 'Mccallister',
          correctCase: 'McCallister'
      }, {
          wrongCase: 'Mccarthy',
          correctCase: 'McCarthy'
      }, {
          wrongCase: 'Mcchesney',
          correctCase: 'McChesney'
      }, {
          wrongCase: 'Mcclain',
          correctCase: 'McClain'
      }, {
          wrongCase: 'Mcclellan',
          correctCase: 'McClellan'
      }, {
          wrongCase: 'Mcclintock',
          correctCase: 'McClintock'
      }, {
          wrongCase: 'Mccloud',
          correctCase: 'McCloud'
      }, {
          wrongCase: 'Mcclure',
          correctCase: 'McClure'
      }, {
          wrongCase: 'Mccollum',
          correctCase: 'McCollum'
      }, {
          wrongCase: 'Mccombs',
          correctCase: 'McCombs'
      }, {
          wrongCase: 'Mcconnell',
          correctCase: 'McConnell'
      }, {
          wrongCase: 'Mccoy',
          correctCase: 'McCoy'
      }, {
          wrongCase: 'Mccullough',
          correctCase: 'McCullough'
      }, {
          wrongCase: 'Mcdonald',
          correctCase: 'McDonald'
      }, {
          wrongCase: 'Mcfarland',
          correctCase: 'McFarland'
      }, {
          wrongCase: 'Mckinney',
          correctCase: 'McKinney'
      }, {
          wrongCase: 'Mckinney Spencer',
          correctCase: 'McKinney Spencer'
      }, {
          wrongCase: 'Mclean',
          correctCase: 'McLean'
      }, {
          wrongCase: 'Mcnulty',
          correctCase: 'McNulty'
      }, {
          wrongCase: 'Millhiser-smith Agency',
          correctCase: 'Millhiser-Smith Agency'
      }, {
          wrongCase: 'Partners Advantage Midwest Llc',
          correctCase: 'Partners Advantage Midwest LLC'
      }, {
          wrongCase: 'Pmc',
          correctCase: 'PMC'
      }
    ];
  }
}
