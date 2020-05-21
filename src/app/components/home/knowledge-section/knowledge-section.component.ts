import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { Types } from 'src/app/models/Types';

@Component({
  selector: 'rhz-knowledge-section',
  templateUrl: './knowledge-section.component.html',
  styleUrls: ['./knowledge-section.component.less']
})
export class KnowledgeSectionComponent implements OnInit {
  knowledgeList: Array<Types.KnowledgeItem>

  constructor(private knowledgeService: KnowledgeService) { }

  ngOnInit(): void {
    this.knowledgeList = this.knowledgeService.getKnowledgeItems();
  }
}
