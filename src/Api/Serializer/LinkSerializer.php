<?php

/*
 * This file is part of fof/links.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FoF\Links\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;

class LinkSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'links';

    /**
     * @param \FoF\Links\Link $link
     */
    protected function getDefaultAttributes($link)
    {
        return [
            'id'                  => $link->id,
            'title'               => $link->title,
            'title_english'       => $link->title_english,
            'icon'                => $link->icon,
            'url'                 => $link->url,
            'position'            => $link->position,
            'isInternal'          => $link->is_internal,
            'isNewtab'            => $link->is_newtab,
            'useRelMe'            => $link->use_relme,
            'isChild'             => (bool) $link->parent_id,
            'visibility'          => $link->visibility,
        ];
    }

    /**
     * @param \FoF\Links\Link $link
     *
     * @return \Tobscure\JsonApi\Relationship
     */
    protected function parent($link)
    {
        return $this->hasOne($link, self::class);
    }
}
